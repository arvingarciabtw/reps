"use client";

import React from "react";
import { Sun, Moon } from "react-feather";
import Cookie from "js-cookie";

import { LIGHT_COLORS, DARK_COLORS } from "@/lib/constants/colors";

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

		root.setAttribute("data-color-theme", nextTheme);
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
		<button className="cursor-pointer" onClick={handleClick}>
			{theme === "light" ? (
				<Sun size="1.5rem" className="h-5 w-5" />
			) : (
				<Moon size="1.5rem" className="h-5 w-5 text-(--color-gray-300)" />
			)}
		</button>
	);
}

export default DarkLightToggle;
