"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Button from "@/components/Button";
import { SearchWrapper, SearchInput } from "@/components/Search/Search.style";

function Search() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		const value = (form.elements.namedItem("search") as HTMLInputElement).value;
		const params = new URLSearchParams(searchParams.toString());
		params.set("search", value);
		params.set("page", "1");
		router.push(`${pathname}?${params.toString()}`);
	}

	return (
		<SearchWrapper onSubmit={handleSubmit}>
			<SearchInput
				name="search"
				type="text"
				defaultValue={searchParams.get("search") ?? ""}
			/>
			<Button variant="cta" type="submit">
				Search
			</Button>
		</SearchWrapper>
	);
}

export default Search;
