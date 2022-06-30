import styled, { css, keyframes } from "styled-components";

const Rotation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Indeterminate = keyframes`
	0% { stroke-dasharray: 75, 100; }
	100% { stroke-dasharray: 0, 100; }
`;

export const Root = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
    align-self: center;
    font-family: 'Roboto', sans-serif;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 436px;
`;

export const Title = styled.h2`
    font-family: 'Roboto Mono', monospace;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: -0.04em;
		text-align: center;
    color: var(--primary);
    margin: 0px;

		@media (max-width:500px) {
			font-size: 28px;
		}
`;

export const Message = styled.p`
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 14px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	gap: 8px;
	margin-top: 48px;
	font-family: 'Roboto', sans-serif;

	>* {
		width: 100%;
	}

	>div {
		display: flex;
		gap: 8px;
		
		>input {
			flex: 1;
		}

		@media (max-width:480px) {
			flex-direction: column;
		}
	}

	@media (max-width:480px) {
		margin-top: 24px;
	}
`;

type InputParams = {
	error?: boolean;
}

export const Input = styled.input<InputParams>`
    border: none;
    background: #2D2E32;
    padding: 12px 24px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    border-radius: 2px;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.08em;
    font-weight: 300;

    ::placeholder {
        color: rgba(255, 255, 255, 0.2);
        padding: 0px 4px;
    }

    :focus {
			outline: 1px solid var(--primary);
    }

		${({ error }) => error && css`
			outline: 1px solid rgba(255, 92, 92, 0.4);

			:focus {
				outline: 1px solid #FF5C5C;
			}
		`}
`;

export const Textarea = styled.textarea<InputParams>`
    border: none;
    background: #2D2E32;
    resize: none;
    padding: 12px 24px;
    color: rgba(255, 255, 255, 0.6);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    border-radius: 2px;
    height: 128px;
    letter-spacing: 0.08em;
    font-weight: 300;

    :focus {
        outline: 1px solid var(--primary);
    }

    ::placeholder {
        color: rgba(255, 255, 255, 0.2);
        padding: 0px 4px;
    }

		${({ error }) => error && css`
			outline: 1px solid rgba(255, 92, 92, 0.4);

			:focus {
				outline: 1px solid #FF5C5C;
			}
		`}
`;

export const MessageLength = styled.span<InputParams>`
	color: rgba(255, 255, 255, 0.2);
	font-size: 12px;
	margin: 0px;
	text-align: end;

	${({ error }) => error && css`
		color: rgba(255, 92, 92, 0.6);
	`}
`;

export const Footer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
`;

export const ErrorList = styled.ul`
	flex: 1;
	padding: 0px;
	margin: 0px;
	list-style: none;
	font-size: 12px;
	margin-top: 8px;

	>:not(:first-child) {
		margin-top: 4px;
	}
`;

type ErrorItemParams = {
	errorInFocus: boolean;
}

export const ErrorItem = styled.ul<ErrorItemParams>`
	color: rgba(255, 92, 92, 0.6);
	padding: 0px;

	${({ errorInFocus }) => errorInFocus && css`
		color: #FF5C5C;
	`}
`;

type SendButtonParams = {
	$loading?: boolean;
}

export const SendButton = styled.button.attrs({
	type: "submit"
}) <SendButtonParams>`
    position: relative;
    display: flex;
		align-self: flex-start;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--primary);
    color: var(--primary);
    background: transparent;
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
    padding: 12px 24px;
		margin-top: 32px;
    width: 100%;
		max-width: 220px;
    background: #25262A;
    border-radius: 2px;
    transition: 250ms;

    :hover {
        filter: brightness(1.3);
    }

    ${({ $loading }) => $loading && css`
        pointer-events: none;
        opacity: 0.5;
        filter: brightness(1.3);
    `}

		@media (max-width:480px) {
			max-width: unset;
		}
`;