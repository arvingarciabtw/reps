"use client";

import Card from "@/app/ui/card";

export default function Output({
	front,
	back,
}: {
	front: string;
	back: string;
}) {
	return (
		<section className="flex w-full flex-1 flex-col gap-2 self-stretch">
			<h1 className="self-start text-(--color-white)">Output</h1>
			<Card front={front} back={back} />
		</section>
	);
}
