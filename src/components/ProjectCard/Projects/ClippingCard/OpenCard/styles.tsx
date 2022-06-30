import styled from "styled-components";
import { motion } from "framer-motion";

export const Root = styled(motion.div).attrs({
	layoutId: "clipping-card"
})`
	position: fixed;
	inset: 0px;
	display: flex;
	flex-direction: column;
	align-content: center;
	background: #FFFFFF;
	color: #2D2E32;
	user-select: none;
	font-family: 'Inter', sans-serif;
	overflow: auto;
	min-height: 100vh;
	overflow-x: hidden;
	z-index: 500;
`;

export const CloseButton = styled.button`
	position: fixed;
	top: 80px;
	right: 48px;
	border: none;
	background: transparent;
`;

export const WaterMark = styled.span`
	position: absolute;
	margin: 40px 0px 0px 60px;
	font-size: 350px;
	font-family: 'Roboto', sans-serif;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 350px;
	line-height: 135.02%;
	opacity: 0.05;
	z-index: 0;
`;

export const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 800px;
	margin: 220px 24px 120px 24px;
	align-self: center;
	z-index: 1;
`;

export const LogoContainer = styled(motion.div).attrs({
	layoutId: "clipping-card-logo"
})`
	position: relative;
	height: 80px;
	width: 240px;
`;

export const Description = styled(motion.p).attrs({
	layoutId: "clipping-card-description"
})`
	font-size: 16px;
	line-height: 150%;
	letter-spacing: -0.035em;
`;

export const ImageContainer = styled(motion.image).attrs({
	layoutId: "clipping-card-image"
})`
	position: relative;
	width: 100%;
	aspect-ratio: 1.6066/1;
	border-radius: 8px;
	box-shadow: 0px 30px 40px -13px rgba(36, 57, 66, 0.3);
	margin-top: 16px;
	border-radius: 8px;
	border: 1px solid rgba(57, 56, 55, 0.1);
	overflow: hidden;
	margin-top: 40px;
`;

export const MoreInfo = styled.div`
	margin-top: 40px;
	font-weight: 400;
	font-size: 14px;
	line-height: 200%;
	white-space: pre-line;
`;