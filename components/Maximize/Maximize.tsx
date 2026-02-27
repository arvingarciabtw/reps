"use client";

import rehypeHighlight from "rehype-highlight";
import React from "react";
import { Dialog, VisuallyHidden } from "radix-ui";
import Button from "@/components/Button";
import Markdown from "react-markdown";
import { RefreshCw, Maximize as MaximizeIcon, Minimize } from "react-feather";
import {
	StyledDialogOverlay,
	StyledDialogContent,
	StyledDialogClose,
	ButtonGroup,
	Content,
	Prose,
} from "@/components/Maximize/Maximize.style";

function Maximize({
	front,
	back,
	...delegated
}: {
	front: string;
	back: string;
} & React.ComponentPropsWithoutRef<"button">) {
	const [isFront, setIsFront] = React.useState(true);

	function toggleSide() {
		setIsFront(!isFront);
	}

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<Button variant="icon" aria-label="Expand card" {...delegated}>
					<MaximizeIcon size={16} />
				</Button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<StyledDialogOverlay />
				<StyledDialogContent>
					<VisuallyHidden.Root>
						<Dialog.Title>Expanded card</Dialog.Title>
					</VisuallyHidden.Root>
					<VisuallyHidden.Root>
						<Dialog.Description>This is the expanded card.</Dialog.Description>
					</VisuallyHidden.Root>
					<ButtonGroup>
						<Button variant="icon" onClick={toggleSide}>
							<RefreshCw size={20} />
						</Button>
						<StyledDialogClose>
							<Minimize size={20} />
						</StyledDialogClose>
					</ButtonGroup>
					<Content>
						<Prose>
							<Markdown rehypePlugins={[rehypeHighlight]}>
								{isFront ? front : back}
							</Markdown>
						</Prose>
					</Content>
				</StyledDialogContent>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

export default Maximize;
