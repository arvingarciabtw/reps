import styled from "styled-components";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "react-feather";
import { AlertDialog } from "radix-ui";

/*
  --- CARD ---
*/
const Prose = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	/* Headings */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		color: var(--color-gray-600);

		.dark & {
			color: var(--color-gray-300);
		}
	}

	/* Paragraphs & Strong */
	p {
		margin: 0;
		color: var(--color-gray-600);
		max-width: 22rem;

		.dark & {
			color: var(--color-gray-300);
		}
	}

	strong {
		.dark & {
			color: var(--color-gray-300);
		}
	}

	/* Inline Code */
	code {
		border-radius: 0.375rem;
		background-color: var(--color-gray-100);
		padding: 0.125rem 0.375rem;
		font-weight: 400;
		color: var(--color-gray-800);

		&::before,
		&::after {
			content: none;
		}

		.dark & {
			background-color: var(--color-gray-750);
			color: var(--color-gray-100);
		}
	}

	/* Code Blocks (Pre) */
	pre {
		min-width: 100%;
		max-width: 22rem;
		background-color: var(--color-white);
		padding: 1rem;
		text-align: left;

		.dark & {
			background-color: var(--color-black);
		}

		/* Nested code inside pre blocks */
		code {
			background-color: var(--color-white);
			padding: 0;
			color: var(--color-gray-800);

			.dark & {
				background-color: var(--color-black);
				color: var(--color-gray-300);
			}
		}
	}

	/* Lists */
	ol,
	ul {
		margin-top: 0.5rem;
		text-align: left;
		color: var(--color-gray-600);

		&::marker {
			color: var(--color-gray-600);
		}

		.dark & {
			color: var(--color-gray-300);
			&::marker {
				color: var(--color-gray-300);
			}
		}
	}

	li {
		margin: 0;
	}
`;

/*
  --- CARD ERROR ---
*/

const Error = styled.p`
	margin-top: 0.25rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: #ef4444;
`;

/*
  --- CARD INPUTS ---
*/

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media (min-width: 640px) {
		flex-direction: row;
	}
`;

const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media (min-width: 640px) {
		flex: 1;
	}
`;

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	@media (min-width: 640px) {
		flex: 1;
	}
`;

const OutputSection = styled.section`
	display: flex;
	width: 100%;
	flex: 1;
	flex-direction: column;
	gap: 0.5rem;
	align-self: stretch;
`;

const Label = styled.label`
	align-self: flex-start;
	color: var(--color-black);
  font-weight: bold;
  letter-spacing: 0.05rem;
  text-transform: uppercase;

	html.dark & {
		color: var(--color-primary);
	}
`;

const Heading = styled.h1`
	align-self: flex-start;
	font-size: 1rem; /* Adjust as needed per your h1 defaults */
  font-weight: bold;
	color: var(--color-black);
  text-transform: uppercase;
  letter-spacing: 0.05rem;

	html.dark & {
		color: var(--color-primary);
	}
`;

const TextArea = styled.textarea`
	min-height: 12.5rem;
	width: 100%;
	resize: none;
	overflow-y: auto;
	border-radius: 0.5rem;
	background-color: var(--color-gray-light);
	padding: 1rem;
	font-family:
		ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
		"Courier New", monospace;
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: var(--color-gray-800);
	border: none;

	&:focus {
		outline: 1px solid var(--color-gray-100);
	}

	@media (min-width: 640px) {
		min-height: 6.25rem;
	}

	html.dark & {
		background-color: var(--color-gray-800);
		color: var(--color-gray-300);

		&:focus {
			outline-color: var(--color-gray-700);
		}
	}
`;

/*
  --- CARD PAGINATION ---
*/
const PaginationContainer = styled.div`
	margin-bottom: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
`;

const NavLink = styled(Link)<{ $isDisabled?: boolean }>`
	display: flex;
	align-items: center;
	color: inherit;

	${(props) =>
		props.$isDisabled &&
		`
    pointer-events: none;
    opacity: 0.25;
  `}

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const PageLink = styled(Link)<{ $isActive?: boolean }>`
	border-radius: 0.375rem;
	padding: 1px 0.625rem;
	text-decoration: none;
	transition: all 0.3s ease;

	${(props) =>
		props.$isActive
			? `
    background-color: var(--color-primary);
    color: var(--color-black);
  `
			: `
    color: inherit;
    &:hover {
      background-color: var(--color-gray-100);
    }
  `}

	html.dark & {
		${(props) =>
			props.$isActive
				? `
      color: var(--color-black);
    `
				: `
      color: var(--color-gray-300);
      &:hover {
        background-color: var(--color-gray-700);
      }
    `}
	}
`;

const Ellipsis = styled.span`
	padding-left: 0.5rem;
	padding-right: 0.5rem;

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const StyledChevronLeft = styled(ChevronLeft)`
	height: 1.25rem;
	width: 1.25rem;
`;

const StyledChevronRight = styled(ChevronRight)`
	height: 1.25rem;
	width: 1.25rem;
`;

/*
  --- REVIEW CARDS ---
*/
const EmptyStateContainer = styled.div`
	margin-top: auto;
	margin-bottom: auto;
	display: flex;
	flex-direction: column;
	/* Fixed this line: */
	align-items: center;
	gap: 1rem;
	align-self: center;
	color: var(--color-gray-600);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const DashboardButton = styled.button`
	display: flex;
	cursor: pointer;
	align-items: center;
	gap: 0.5rem;
	border-radius: 1rem;
	border: 1px solid var(--color-gray-200);
	background-color: transparent;
	padding: 0.5rem 1.25rem;
	color: var(--color-gray-600);
	transition: all 0.3s ease;

	&:hover {
		background-color: #f3f4f6;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	html.dark & {
		border-color: var(--color-gray-700);
		background-color: var(--color-gray-800);
		color: var(--color-gray-300);

		&:hover {
			background-color: var(--color-gray-800);
			color: var(--color-primary);
		}
	}
`;

const MainWrapper = styled.div`
	margin-top: auto;
	margin-bottom: auto;
	display: flex;
	height: 12.5rem;
	width: 100%;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	align-self: center;

	@media (min-width: 640px) {
		width: 26rem;
	}
`;

const ControlsWrapper = styled.div`
	display: flex;
	width: 100%;
	max-width: 26rem;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 0.5rem;
`;

const CardCount = styled.p`
	margin-right: auto;
	color: var(--color-gray-600);

	span {
		font-family: ui-sans-serif, system-ui, sans-serif;
	}

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const ActionGroup = styled.div`
	display: flex;
	gap: 1rem;
`;

const BaseIconButton = styled.button`
	display: flex;
	cursor: pointer;
	align-items: center;
	gap: 0.5rem;
	border-radius: 1rem;
	padding: 0.25rem;
	color: var(--color-black);
	transition: all 0.3s ease;
	border: none;

	&:hover {
		opacity: 0.75;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;

const EditButton = styled(BaseIconButton)`
	display: grid;
	height: 1.625rem;
	width: 1.625rem;
	place-items: center;
	background-color: var(--color-primary);
`;

const CorrectButton = styled(BaseIconButton)`
	background-color: #4ade80;
`;

const WrongButton = styled(BaseIconButton)`
	background-color: #f87171;
`;

const StyledLink = styled(Link)`
	display: grid;
	height: 100%;
	width: 100%;
	place-items: center;
  color: var(--color-black);
`;

const PageWrapper = styled.div`
	margin-left: auto;
	margin-right: auto;
	margin-top: auto;
	margin-bottom: auto;
	display: flex;
	width: 100%;
	flex-direction: column;
	text-align: center;
	color: var(--color-gray-600);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Description = styled.p`
	max-width: 30rem;
	align-self: center;
`;

// Typography & Links
const PrimaryLink = styled(Link)`
	color: var(--color-black);
	text-decoration: underline;

	&:hover {
		text-decoration: none;
	}

  html.dark & {
    color: var(--color-white);
  }
`;

const ButtonGroup = styled.div`
	margin-top: 1rem;
	margin-bottom: 1.5rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	align-self: center;
`;

const ActionButton = styled.button`
	display: flex;
	cursor: pointer;
	align-items: center;
	gap: 0.5rem;
	border-radius: 1rem;
	border: 1px solid var(--color-gray-200);
	background-color: transparent;
	padding: 0.5rem 1.25rem;
	color: var(--color-gray-600);
	transition: all 0.3s ease;

	&:hover {
		background-color: #f3f4f6;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	html.dark & {
		border-color: var(--color-gray-700);
		background-color: var(--color-gray-800);
		color: var(--color-gray-300);

		&:hover {
			background-color: var(--color-gray-800);
			color: var(--color-primary);
		}
	}
`;

const DangerButton = styled.button`
	cursor: pointer;
	border-radius: 1rem;
	background-color: #ef4444;
	padding: 0.5rem 1.25rem;
	color: var(--color-white);
	transition: all 0.3s ease;
	border: none;

	&:hover {
		opacity: 0.75;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;

const IconButton = styled.button`
	cursor: pointer;
	background: none;
	border: none;
	padding: 0;
	transition: all 0.3s ease;

	&:hover {
		color: var(--color-gray-300);
	}

	html.dark &:hover & svg {
			color: var(--color-primary);
		
	}
`;

const Overlay = styled(AlertDialog.Overlay)`
	position: fixed;
	inset: 0;
	background-color: var(--color-black);
	opacity: 0.75;
`;

const ModalContent = styled(AlertDialog.Content)`
	position: fixed;
	top: 50%;
	left: 50%;
	display: flex;
	width: 100%;
	max-width: 20rem;
	transform: translate(-50%, -50%);
	flex-direction: column;
	align-items: center;
	border-radius: 1rem;
	border: 1px solid var(--color-gray-700);
	background-color: var(--color-white);
	padding: 1.5rem;
	color: var(--color-gray-300);
	outline: none;

	html.dark & {
		background-color: var(--color-gray-800);
	}
`;

const ModalTitle = styled(AlertDialog.Title)`
	margin-bottom: 0.5rem;
	font-size: 1.5rem;
	font-weight: 500;
	color: var(--color-gray-800);

	html.dark & {
		color: var(--color-white);
	}
`;

const ModalDescription = styled(AlertDialog.Description)`
	margin-bottom: 1rem;
	text-align: center;
	color: var(--color-gray-600);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

export {
	Prose,
	Error,
	Container,
	InputGroup,
	StyledSection,
	OutputSection,
	Label,
	Heading,
	TextArea,
	PaginationContainer,
	NavLink,
	PageLink,
	Ellipsis,
	StyledChevronLeft,
	StyledChevronRight,
	EmptyStateContainer,
	DashboardButton,
	MainWrapper,
	ControlsWrapper,
	CardCount,
	ActionGroup,
	EditButton,
	CorrectButton,
	WrongButton,
	StyledLink,
	PageWrapper,
	Form,
	Description,
	PrimaryLink,
	ButtonGroup,
	ActionButton,
	DangerButton,
	IconButton,
	Overlay,
	ModalContent,
	ModalTitle,
	ModalDescription,
};
