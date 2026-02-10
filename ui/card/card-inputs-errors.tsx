export default function CardInputsErrors({
	state,
}: {
	state: {
		errors?: {
			front?: string[];
			back?: string[];
			id?: string[];
			deckId?: string[];
		};
		message?: string | null;
	};
}) {
	return (
		<>
			{state.errors?.front && (
				<p className="mt-1 text-sm text-red-500">{state.errors.front[0]}</p>
			)}
			{state.errors?.back && (
				<p className="mt-1 text-sm text-red-500">{state.errors.back[0]}</p>
			)}
			{state.message && (
				<p className="mt-1 text-sm text-red-500">{state.message}</p>
			)}
		</>
	);
}
