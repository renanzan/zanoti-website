import styled from "styled-components";

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 100px 24px 0px 24px;
	margin: 180px 24px;

	@media (max-width: 800px) {
		margin-top: 140px;
	}

	@media (max-width: 650px) {
		margin: 40px 0px;
	}
`;

export const CardCointainer = styled.div`
	padding: 40px;
	border-radius: 32px;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
	background: var(--background);
`;

export const MoreInfo = styled.div`
	max-width: 400px;
	margin-top: 80px;
	text-align: center;

	>strong {
		color: var(--primary);
	}
`;