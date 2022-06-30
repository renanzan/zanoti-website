import styled, { keyframes } from "styled-components";

const scrollAnimation = keyframes`
	0% { transform: translateY(0px); }
	50% { transform: translateY(10px); }
	100% { transform: translateY(-10px) }
`;

export const Cover = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	background: #2D2E32;
	padding: 180px 80px 80px 24px;
	gap: 124px;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);

	@media (max-height:1080px) {
		height: 100vh;
		align-items: center;
	}

	@media (max-width:770px) {
		flex-direction: column-reverse;
		padding: 120px 24px 80px 24px;
		gap: 64px;
	}

	@media (max-width:450px) {
		padding: 120px 24px 80px 24px;
	}
`;

export const CoverInfoContainer = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	font-family: 'Roboto', sans-serif;
	max-width: 684px;
	z-index: 1;

	:before {
		content:"<html>";
		position: absolute;
		transform: translateX(calc(-100% - 80px)) translateY(-104px);
		font-family: 'Parisienne', cursive;
		color: rgba(255, 255, 255, 0.1);
		font-size: 32px;
		font-weight: lighter;
	}

	:after {
		content:"<body>";
		position: absolute;
		transform: translateX(calc(-100% - 48px)) translateY(-44px);
		font-family: 'Parisienne', cursive;
		color: rgba(255, 255, 255, 0.1);
		font-size: 32px;
		font-weight: lighter;
	}

	>h1 {
		font-size: 48px;
		margin: 16px 0px 0px 0px;

		:before {
			content: "<h1>";
			position: absolute;
			transform: translateX(calc(-100% - 24px)) translateY(-10px);
			font-family: 'Parisienne', cursive;
			color: rgba(255, 255, 255, 0.1);
			font-size: 32px;
			font-weight: lighter;
		}
	}

	>p {
		font-size: 16px;
		color: rgba(255, 255, 255, 0.6);
		margin: 8px 0px 0px 0px;

		:before {
			content:"<p>";
			position: absolute;
			transform: translateX(calc(-100% - 24px)) translateY(-10px);
			font-family: 'Parisienne', cursive;
			color: rgba(255, 255, 255, 0.1);
			font-size: 32px;
			font-weight: lighter;
		}
	}

	>a {
		color: var(--primary);
		margin: 48px 0px 0px 0px;
	}

	@media (max-width:770px) {
		max-width: fit-content;
	}
`;

export const Badge = styled.span`
	background: var(--primary);
	font-family: 'Roboto Mono', monospace;
	font-size: 12px;
	font-weight: 700;
	color: #2D2E32;
	letter-spacing: -0.04em;
	padding: 2px 6px;
	border-radius: 2px;
	width: fit-content;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1200px;
	padding: 180px 24px;
	align-self: center;

	@media (max-width:800px) {
		padding: 64px 24px;
	}
`;

export const Introduction = styled.div`
	display: flex;
	gap: 80px;

	@media (max-width:800px) {
		flex-direction: column-reverse;
	}
`;

export const IntroductionSection = styled.section`
	flex: 1;
	min-width: 400px;

	>span {
		font-size: 14px;
		color: rgba(255, 255, 255, 0.6);   
	}

	@media (max-width:800px) {
		min-width: fit-content;
		width: 100%;
	}
`;

export const IntroductionTitle = styled.h3`
	font-size: 40px;
	font-weight: 400;
	margin: 20px 0px 16px 0px;
`;

export const Quote = styled.p`
	font-style: italic;
	line-height: 21px;
	margin: 16px 0px 0px 0px;
`;

export const IntroductionDescription = styled.p`
	white-space: pre-line;
	font-family: 'Roboto', sans-serif;
	color: rgba(255, 255, 255, 0.6);
	line-height: 21px;
	margin: 16px 0px 0px 0px;
`;

export const TechList = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	list-style: none;
	margin: 0px;
	padding: 0px;
	gap: 16px;
	margin-top: 24px;

	>li {
		display: flex;
		align-items: center;
		overflow: hidden;
		color: rgba(255, 255, 255, 0.6);
		font-size: 14px;

		:before {
			content: " ";
			display: inline-block;
			border-left: 5px solid transparent;
			border-right: 5px solid transparent;
			border-bottom: 8px solid #6EF2A3;
			transform: rotateZ(90deg);
			margin-right: 8px;
		}
	}

	@media (max-width:450px) {
		grid-template-columns: repeat(1, 1fr);
		padding: 0px 48px;
	}
`;

export const ListOfCompanies = styled.div`
	display: flex;
	justify-content: center;
	gap: 40px;
	margin: 124px 24px;

	img {
		opacity: 0.2;
		height: 50px;
		aspect-ratio: 3/1;
	}

	@media (max-width:800px) {
		margin: 64px 24px;
	}

	@media (max-width:550px) {
		flex-direction: column;
		gap: 20px;
		margin: 80px 24px;
	}
`;

export const ScrollDownAnimationContainer = styled.div`
	position: absolute;
	bottom: 64px;
	height: 32px;
	aspect-ratio: 1/1;
	opacity: 0.8;
	animation: 2s ${scrollAnimation} infinite alternate linear;

	@media (max-height: 800px) {
		display: none;
	}
`;