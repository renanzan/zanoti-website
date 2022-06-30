import { NextComponentType } from "next";
import styled from "styled-components";
import { motion } from "framer-motion";

type HeaderVariantsProps = {
	children: React.ReactElement;
};

const Root = styled(motion.div).attrs({
	layoutId: "header-variant"
})`
	position: fixed;
	display: flex;
	align-items: center;
	width: 100%;
	z-index: 1000;
	transition: 250ms;
	padding: 24px 40px;
`;

const SimplifiedHeaderVariants: NextComponentType<{}, {}, HeaderVariantsProps> = ({ children }) => {
	return (
		<Root>
			{children}
		</Root>
	);
}

export default SimplifiedHeaderVariants;