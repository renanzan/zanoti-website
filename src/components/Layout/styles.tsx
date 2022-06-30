import styled from "styled-components";

export const Root = styled.div`
	position: absolute;
	inset: 0px;
	display: flex;
	flex-direction: column;
	height: fit-content;
	min-height: 100vh;
	background-color: var(--background);
	color: var(--text);
`;

export const Main = styled.main`
	flex: 1;
  display: flex;
  flex-direction: column;
	overflow-x: hidden;
`;