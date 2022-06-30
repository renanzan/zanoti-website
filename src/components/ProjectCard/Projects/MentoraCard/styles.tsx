import styled from "styled-components";

export const Root = styled.div`
	height: 100%;
	width: 100%;
	background: #2D2D36;
	border-radius: 8px;
	user-select: none;
	transition: 500ms;

	&, & > * {
		cursor: pointer;
	}

	:hover {
		transform: scale(1.02);
	}
`;