import styled from "styled-components";

export const RecentlySentEmailMessage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	>h2 {
		text-align: center;
		color: var(--primary);
		margin: 0px;
	}

	>p {
		text-align: center;
		margin: 0px;
		white-space: pre-line;
		margin-top: 16px;
	}

	>span {
		text-align: center;
		font-family: 'Roboto', sans-serif;
		font-size: 14px;
		color: rgba(255, 255, 255, 0.5);
		margin-top: 24px;
	}
`;

export const EmailSentAnimationContainer = styled.div`
	height: 200px;
	width: 200px;
	margin-top: 40px;
`;