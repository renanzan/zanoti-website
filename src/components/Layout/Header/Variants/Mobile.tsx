import { NextComponentType } from "next";
import styled, { css } from "styled-components";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useLayout } from "components/Layout";

type HeaderVariantsProps = {
	children: React.ReactElement;
};

type RootParams = {
	blur?: boolean;
}

const Root = styled(motion.div).attrs({
	layoutId: "header-variant"
}) <RootParams>`
	position: fixed;
	display: flex;
	align-items: center;
	width: 100%;
	z-index: 1000;
	transition: 250ms;
	padding: 24px 40px;

	${({ blur }) => blur && css`
		backdrop-filter: blur(20px);
	`}
`;

const MobileHeaderVariants: NextComponentType<{}, {}, HeaderVariantsProps> = ({ children }) => {
	const { scrollY } = useViewportScroll();
	const { headerConfig } = useLayout();

	return (
		<Root
			blur={headerConfig.blur}
			style={{
				padding: useTransform(scrollY, [0, 300], ["16px 24px", "8px 24px"]),
				boxShadow: useTransform(scrollY, [100, 300], ["0px 0px 0px rgba(0, 0, 0, 0)", "0 10px 30px -10px rgba(30, 30, 30, 0.7)"])
			}}>
			{children}
		</Root>
	);
}

export default MobileHeaderVariants;