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
	position: relative;
	padding: 40px;
	border-radius: 32px;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
	background: var(--background);
	z-index: 1;
`;

export const MoreInfo = styled.div`
	max-width: 400px;
	margin-top: 80px;
	text-align: center;
	transition: 250ms;

	>strong {
		color: var(--primary);
	}

	a {
		text-decoration: none;
	}

	:hover {
		filter: brightness(1.5);
	}
`;