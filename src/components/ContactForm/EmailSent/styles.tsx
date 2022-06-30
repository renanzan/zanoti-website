import styled from "styled-components";

export const RecentlySentEmailMessage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: var(--background);
	padding: 40px;
	border-radius: 32px;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

	>h2 {
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