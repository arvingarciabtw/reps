"use client";

import React from "react";
import { Sun, Moon } from "react-feather";
import Cookie from "js-cookie";
import styled from "styled-components";
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

const ThemeToggleWrapper = styled.button`
	cursor: pointer;
	color: var(--color-gray-800);
  background-color: transparent;
  border: none;

	html.dark & {
		color: var(--color-gray-300);
	}
`;

export default DarkLightToggle;
