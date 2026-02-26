import { cookies } from "next/headers";
import {
	LIGHT_COLORS,
	DARK_COLORS,
} from "@/components/ThemeToggle/ThemeToggle.constants";

async function getTheme() {
	const savedTheme = (await cookies()).get("color-theme");
	const theme = savedTheme?.value || "light";

	return theme;
}

async function getThemeColors() {
	const themeColors = (
		(await getTheme()) === "light" ? LIGHT_COLORS : DARK_COLORS
	) as React.CSSProperties;

	return themeColors;
}

export { getTheme, getThemeColors };
