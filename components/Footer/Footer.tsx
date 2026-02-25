import {
	FooterWrapper,
	FooterContent,
	Developer,
} from "@/components/Footer/Footer.style";

export default function Footer() {
	return (
		<FooterWrapper>
			<FooterContent>
				Made by{" "}
				<Developer
					href="https://github.com/arvingarciabtw"
					target="_blank"
					rel="noopener noreferrer"
				>
					@arvingarciabtw
				</Developer>
			</FooterContent>
		</FooterWrapper>
	);
}
