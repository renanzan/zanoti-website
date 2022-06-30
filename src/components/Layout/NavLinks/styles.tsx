import styled, { css } from "styled-components";
import { motion } from "framer-motion";

type NavItemsContainerParams = {
	show?: boolean;
}

export const NavItemsContainer = styled.div<NavItemsContainerParams>`
	flex: 1;
	display: flex;
	transition: 250ms;

	> :not(:first-child) {
		margin-left: 24px;
	}

	${({ show }) => !show && css`
		opacity: 0;
	`}

	@media (max-width: 900px) {
		display: none;
	}
`;

interface NavLinkProps {
	$current: boolean;
	primary?: string;
}

export const NavLink = styled(motion.a) <NavLinkProps>`
	display: inline-block;
	position: relative;
	color: white;
	letter-spacing: -0.04em;
	text-decoration: none;
	transition: 125ms;

	>* {
		cursor: pointer;
	}

	:hover {
		color: ${({ primary }) => primary || "var(--primary)"}
	}

	${({ $current, primary }) => $current && css`
		color: ${primary || "var(--primary)"};

		margin: 0px;

		::before {
			content: "<";
			margin-right: 16px;
		}

		::after {
			content: ">";
			margin-left: 16px;
		}
	`}
`;