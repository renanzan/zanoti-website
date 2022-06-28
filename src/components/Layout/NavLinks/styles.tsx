import styled, { css } from "styled-components";
import { motion } from "framer-motion";

interface NavLinkProps {
	current: boolean;
}

export const NavItemsContainer = styled.div`
	flex: 1;
	display: flex;

	> :not(:first-child) {
		margin-left: 24px;
	}

	@media (max-width: 900px) {
		display: none;
	}
`;

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
		color: #6EF2A3;
	}

	${({ current }) => current && css`
		color: #6EF2A3;
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