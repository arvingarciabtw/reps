"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export type State = {
	errors?: {
		id?: string[];
		front?: string[];
		back?: string[];
		deckId?: string[];
	};
	message: string | null;
};

const FormSchema = z.object({
	id: z.string(),
	front: z.string(),
	back: z.string(),
	deckId: z.string(),
});

const CreateCard = FormSchema.omit({ id: true });
const DeleteCard = FormSchema.omit({
	front: true,
	back: true,
});

export async function createCard(
	prevState: State,
	formData: FormData,
): Promise<State> {
	const validatedFields = CreateCard.safeParse({
		front: formData.get("front"),
		back: formData.get("back"),
		deckId: formData.get("deckId"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing fields. Failed to create card.",
		};
	}

	const { front, back, deckId } = validatedFields.data;

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	try {
		await prisma.card.create({
			data: {
				front,
				back,
				deckId,
				days: 0,
				dateToDisplay: today,
			},
		});
	} catch (err) {
		console.error("Failed to create card:", err);
		return {
			message: "Database error: Failed to create card.",
		};
	}

	revalidatePath(`/deck/${deckId}/create`);
	redirect(`/deck/${deckId}/create`);
}

export async function updateCard(
	prevState: State,
	formData: FormData,
): Promise<State> {
	const validatedFields = FormSchema.safeParse({
		id: formData.get("cardId"),
		front: formData.get("front"),
		back: formData.get("back"),
		deckId: formData.get("deckId"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing fields. Failed to update card.",
		};
	}

	const { id, front, back, deckId } = validatedFields.data;

	try {
		await prisma.card.update({
			where: {
				id,
			},
			data: {
				front,
				back,
			},
		});
	} catch (err) {
		console.error("Failed to update card:", err);
		return {
			message: "Database error: Failed to update card.",
		};
	}

	revalidatePath(`/deck/${deckId}/view`);
	redirect(`/deck/${deckId}/view`);
}

export async function deleteCard(
	prevState: State,
	formData: FormData,
): Promise<State> {
	const validatedFields = DeleteCard.safeParse({
		id: formData.get("cardId"),
		deckId: formData.get("deckId"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing fields. Failed to delete card.",
		};
	}

	const { id, deckId } = validatedFields.data;

	try {
		await prisma.card.delete({
			where: {
				id,
				deckId,
			},
		});
	} catch (err) {
		console.error("Failed to delete card:", err);
		return {
			message: "Database error: Failed to delete card.",
		};
	}

	revalidatePath(`/deck/${deckId}/view`);
	redirect(`/deck/${deckId}/view`);
}

export async function markCardCorrect(cardId: string, deckId: string) {
	const card = await prisma.card.findUnique({
		where: { id: cardId },
	});

	if (!card) {
		throw new Error("Card not found");
	}

	const newDays = card.days === 0 ? 1 : Math.min(card.days * 2, 32);

	const nextDate = new Date();
	nextDate.setDate(nextDate.getDate() + newDays);
	nextDate.setHours(0, 0, 0, 0);

	try {
		await prisma.card.update({
			where: { id: cardId },
			data: {
				days: newDays,
				dateToDisplay: nextDate,
			},
		});
	} catch (err) {
		console.error("Failed to mark card correctly:", err);
		return {
			message: "Database error: Failed to mark card correctly.",
		};
	}

	revalidatePath(`/deck/${deckId}/review`);
}

export async function markCardWrong(cardId: string, deckId: string) {
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	try {
		await prisma.card.update({
			where: { id: cardId },
			data: {
				days: 0,
				dateToDisplay: today,
			},
		});
	} catch (err) {
		console.error("Failed to mark card wrong:", err);
		return {
			message: "Database error: Failed to mark card wrong.",
		};
	}

	revalidatePath(`/deck/${deckId}/review`);
}
