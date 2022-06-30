import styled from "styled-components";

export const ProjectCardItem = styled.li`
	max-width: 100%;
`;

export const Content = styled.div`
	height: 300px;
	width: 328px;
	max-width: 100%;
`;

export const TagList = styled.ul`
	margin-top: 16px;
	list-style: none;
	padding: 0px;
	display: flex;
	gap: 8px;
`;

export const Tag = styled.li`
	font-size: 12px;
	color: var(--background);
	background: var(--primary);
	padding: 2px 4px;
	border-radius: 2px;
	text-transform: uppercase;
	font-weight: 700;
`;