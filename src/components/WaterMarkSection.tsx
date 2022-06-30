import { NextComponentType } from "next";
import styled from "styled-components";

type WaterMarkSectionProps = {
	children: string;
}

const WaterMarkContainer = styled.div`
	position: absolute;
	inset: 0px;
	max-width: 2200px;
	margin: 0px auto;
	z-index: 0;
`;

const WaterMark = styled.h1`
	position: absolute;
	top: 0px;
	right: 70px;
	margin-top: 40px;
	font-family: 'Roboto', sans-serif;
	font-size: 350px;
	font-weight: 700;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.05);
	pointer-events: none;
	user-select: none;
	z-index: 0;

	@media (max-width: 1800px) {
		font-size: 300px;
		margin-top: 80px;
	}

	@media (max-width: 1500px) {
		font-size: 240px;
		margin-top: 120px;
	}

	@media (max-width: 1200px) {
		font-size: 200px;
		margin-top: 140px;
	}

	@media (max-width: 1040px) {
		font-size: 160px;
	}

	@media (max-width: 850px) {
		font-size: 120px;
	}

	@media (max-width: 650px) {
		display: none;
	}
`;

const WaterMarkSection: NextComponentType<{}, {}, WaterMarkSectionProps> = ({ children }) => {
	return (
		<WaterMarkContainer>
			<WaterMark>
				{children}
			</WaterMark>
		</WaterMarkContainer>
	)
}

export default WaterMarkSection;