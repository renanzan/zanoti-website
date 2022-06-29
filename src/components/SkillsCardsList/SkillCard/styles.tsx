import styled from "styled-components";

export const Root = styled.li`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 426px;
	min-height: 131px;
	padding: 24px 148px 24px 24px;
	border-radius: 4px;
	background: #2A2B2F;

	:first-child {
		box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.25);
	}

	@media (max-width:950px) {
		padding: 24px 48px 24px 24px;
	}
`;

export const Title = styled.h3`
	font-size: 14px;
	font-weight: 400;
	color: var(--primary);
	margin: 0px;
`;

export const Description = styled.p`
	font-family: 'Roboto', sans-serif;
	color: rgba(255, 255, 255, 0.6);
	font-size: 14px;
	margin: 4px 0px 0px 0px;
`;

export const Icon = styled.div`
	position: absolute;
	top: 24px;
	right: 24px;
	height: 20px;
	width: 20px;
`;