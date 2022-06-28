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
    color: var(--primary);
    margin: 0px;
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
    }
`;

export const Input = styled.input`
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
`;

export const Textarea = styled.textarea`
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
`;

type SendButtonParams = {
    loading?: boolean;
}

export const SendButton = styled.button.attrs({
    type: "submit"
})<SendButtonParams>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--primary);
    color: var(--primary);
    background: transparent;
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
    padding: 12px 24px;
    width: fit-content;
    margin-top: 32px;
    align-self: flex-end;
    background: #25262A;
    border-radius: 2px;
    transition: 250ms;

    :hover {
        filter: brightness(1.3);
    }

    ${({ loading }) => loading && css`
        pointer-events: none;
        opacity: 0.5;
        filter: brightness(1.3);
    `}
`;

export const CircleLoadingContainer = styled.svg.attrs({
	viewBox: "0 0 36 36"
})`
	display: block;
    margin: 10px auto;
    max-height: 250px;
    fill: green;
    animation: ${Rotation} 1s ease-in-out infinite;
`;

export const CircleLoading = styled.path.attrs({
	d: `M18 2.0845
		a 15.9155 15.9155 0 0 1 0 31.831
		a 15.9155 15.9155 0 0 1 0 -31.831`
})`
	stroke: orange;
    fill: red;
    stroke-width: 2.8;
    stroke-linecap: round;
    animation: ${Indeterminate} 1s ease-in-out infinite alternate-reverse;
    height: 40px;
    width: 40px;
`;