import { useEffect, useRef, useState } from "react";
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
	background: #2D2E32;

	@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
		background: transparent;

		${({ blur }) => blur && css`
			backdrop-filter: blur(20px);
			-webkit-backdrop-filter: blur(20px);
		`}
	}
`;

const headerVariants = {
	visible: { y: "0%" },
	hidden: { y: "-100%" }
};

const DefaultHeaderVariants: NextComponentType<{}, {}, HeaderVariantsProps> = ({ children }) => {
	const { headerConfig } = useLayout();
	const { scrollY } = useViewportScroll();

	const [hidden, setHidden] = useState(false);
	const prevScroll = useRef<number>(0);

	useEffect(() => {
		function update(scroll: number) {
			if (scroll > prevScroll.current && scroll > 800)
				setHidden(true);
			else
				setHidden(false);

			prevScroll.current = scroll;
		}

		return scrollY.onChange(update);
	}, []);

	return (
		<Root
			blur={headerConfig.blur}
			style={{
				padding: useTransform(scrollY, [100, 300], ["42px 80px", "12px 84px"]),
				boxShadow: useTransform(scrollY, [100, 300], ["0px 0px 0px rgba(0, 0, 0, 0)", "0 10px 30px -10px rgba(30, 30, 30, 0.7)"])
			}}
			animate={(hidden && !headerConfig.simplified) ? "hidden" : "visible"}
			variants={headerVariants}
			transition={{ type: "tween" }}>
			{children}
		</Root>
	);
}

export default DefaultHeaderVariants;