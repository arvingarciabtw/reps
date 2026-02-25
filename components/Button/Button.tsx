import {
	CTA,
	Ghost,
	Regular,
	Danger,
	Icon,
} from "@/components/Button/Button.style";

function Button({
	children,
	variant,
	...delegated
}: {
	children: React.ReactNode;
	variant: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<>
			{variant === "cta" ? (
				<CTA {...delegated}>{children}</CTA>
			) : variant === "ghost" ? (
				<Ghost {...delegated}>{children}</Ghost>
			) : variant === "danger" ? (
				<Danger {...delegated}>{children}</Danger>
			) : variant === "icon" ? (
				<Icon {...delegated}>{children}</Icon>
			) : (
				<Regular {...delegated}>{children}</Regular>
			)}
		</>
	);
}

export default Button;
