"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";

export type State = {
	errors?: {
		deckId?: string[];
		title?: string[];
	};
	message: string | null;
};

const FormSchema = z.object({
	deckId: z.string(),
	title: z.string(),
});

const CreateDeck = FormSchema.omit({ deckId: true });
const DeleteDeck = FormSchema.omit({ title: true });

export async function createDeck(
	prevState: State,
	formData: FormData,
): Promise<State> {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		return {
			message: "Unauthorized. Please sign in.",
		};
	}

	const validatedFields = CreateDeck.safeParse({
		title: formData.get("title"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing fields. Failed to create deck.",
		};
	}

	const { title } = validatedFields.data;
	const titleCapitalized = title.charAt(0).toUpperCase() + title.slice(1);

	try {
		await prisma.deck.create({
			data: {
				userId: session.user.id,
				title: titleCapitalized,
			},
		});
	} catch (err) {
		console.error("Failed to create deck:", err);
		return {
			message: "Database error: Failed to create deck.",
		};
	}

	revalidatePath("/dashboard");
	redirect("/dashboard");
}

export async function editDeck(
	prevState: State,
	formData: FormData,
): Promise<State> {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		return {
			message: "Unauthorized. Please sign in.",
		};
	}

	const validatedFields = FormSchema.safeParse({
		deckId: formData.get("deckId"),
		title: formData.get("title"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing fields. Failed to edit deck.",
		};
	}

	const { deckId, title } = validatedFields.data;

	try {
		await prisma.deck.update({
			where: { id: deckId },
			data: { title },
		});
	} catch (err) {
		console.error("Failed to update deck:", err);
		return {
			message: "Database error: Failed to update deck.",
		};
	}

	revalidatePath("/dashboard");
	redirect("/dashboard");
}

export async function deleteDeck(
	prevState: State,
	formData: FormData,
): Promise<State> {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		return {
			message: "Unauthorized. Please sign in.",
		};
	}

	const validatedFields = DeleteDeck.safeParse({
		deckId: formData.get("deckId"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing fields. Failed to delete deck.",
		};
	}

	const { deckId } = validatedFields.data;

	try {
		await prisma.deck.delete({
			where: { id: deckId },
		});
	} catch (err) {
		console.error("Failed to update deck:", err);
		return {
			message: "Database error: Failed to update deck.",
		};
	}

	revalidatePath("/dashboard");
	redirect("/dashboard");
}
