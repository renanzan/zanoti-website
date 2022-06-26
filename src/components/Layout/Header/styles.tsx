import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import CustomLogo from "components/DynamicLogo";

interface NavLinkProps {
	current: boolean;
}

export const Root = styled(motion.header)`
	position: fixed;
	display: flex;
	align-items: center;
	width: 100%;
	z-index: 1000;
	background: rgba(37, 38, 42, 0.25);
	backdrop-filter: blur(20px);
`;

export const LogoContainer = styled(motion.a)`
	margin-right: 104px;
`;

export const Logo = styled(CustomLogo)`
	height: 32px;
	width: auto;
`;

export const Menu = styled(motion.nav)`
	flex: 1;
	display: flex;
	align-items: center;
`;

export const NavItemsContainer = styled.div`
	flex: 1;

	> :not(:first-child) {
		margin-left: 24px;
	}
`;

export const NavLink = styled(motion.a) <NavLinkProps>`
	display: inline-block;
	position: relative;
	color: white;
	font-size: 16px;
	letter-spacing: -0.04em;
	text-decoration: none;
	transition: 125ms;

	> * {
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

export const SocialLinks = styled.div`
	display: flex;
	align-items: center;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	color: var(--secondary-text);

	> a {
		display: flex;
		align-items: center;
		text-decoration: none;
		transition: 125ms;

		> svg {
			height: 24px;
			width: 24px;
			margin-right: 8px;
			fill: var(--text);
		}
	
		:hover {
			color: var(--primary);

			> svg {
				fill: var(--primary);
			}
		}
	}

	> :not(:first-child) {
		margin-left: 24px;
	}
`;