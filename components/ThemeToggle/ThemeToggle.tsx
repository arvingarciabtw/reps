"use client";

import React from "react";
import Cookie from "js-cookie";
import { Sun, Moon } from "react-feather";
import { ThemeToggleWrapper } from "@/components/ThemeToggle/ThemeToggle.style";
import {
	LIGHT_COLORS,
	DARK_COLORS,
} from "@/components/ThemeToggle/ThemeToggle.constants";

function DarkLightToggle({ initialTheme }: { initialTheme: string }) {
	const [theme, setTheme] = React.useState(initialTheme);

	function handleClick() {
		const nextTheme = theme === "light" ? "dark" : "light";

		setTheme(nextTheme);

		Cookie.set("color-theme", nextTheme, {
			expires: 1000,
		});

		const root = document.documentElement;
		const colors = nextTheme === "light" ? LIGHT_COLORS : DARK_COLORS;

		if (root.classList.contains("dark")) {
			root.classList.remove("dark");
		} else {
			root.classList.add("dark");
		}

		Object.entries(colors).forEach(([key, value]) => {
			root.style.setProperty(key, value);
		});
	}

	return (
		<ThemeToggleWrapper onClick={handleClick}>
			{theme === "light" ? <Sun size="22" /> : <Moon size="22" />}
		</ThemeToggleWrapper>
	);
}

export default DarkLightToggle;
