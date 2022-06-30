import styled from "styled-components";

export const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 320px 24px 180px 24px;
`;

export const Content = styled.div`
	display: flex;
	width: 100%;
	max-width: 1200px;
	padding: 0px 40px;
`;

export const ProjectList = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
	justify-content: space-between;
	padding: 0px;
`;