import styled from "styled-components";

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 100px;
	margin: 180px 24px;
`;

export const MoreInfo = styled.div`
	max-width: 400px;
	margin-top: 80px;
	text-align: center;

	>strong {
		color: var(--primary);
	}
`;