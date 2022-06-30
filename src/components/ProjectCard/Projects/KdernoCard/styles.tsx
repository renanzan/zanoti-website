import styled from "styled-components";
import { motion } from "framer-motion";

export const Root = styled(motion.div).attrs({
	layoutId: "kderno-card"
})`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	height: 100%;
	width: 100%;
	background: #55C9FF;
	border-radius: 8px;
	font-family: 'Inter', sans-serif;
	padding: 32px;
	user-select: none;

	&, & > * {
		cursor: pointer;
	}
`;

export const LogoContainer = styled(motion.div).attrs({
	layoutId: "kderno-card-logo"
})`
	position: relative;
	height: 50px;
	width: 130px;
`;

export const Description = styled(motion.p).attrs({
	layoutId: "kderno-card-description"
})`
	font-size: 16px;
	line-height: 150%;
	letter-spacing: -0.035em;
`;