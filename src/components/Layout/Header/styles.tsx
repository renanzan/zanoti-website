import styled from "styled-components";
import { motion } from "framer-motion";

import DynamicLogo from "components/DynamicLogo";

export const Root = styled(motion.header)`
	position: fixed;
	display: flex;
	align-items: center;
	width: 100%;
	z-index: 1000;
	backdrop-filter: blur(20px);
`;

export const LogoContainer = styled(motion.a)`
	margin-right: 104px;

	@media (max-width: 1240px) {
		margin-right: 40px;
	}

	@media (max-width: 900px) {
		flex: 1;
	}
`;

export const Logo = styled(DynamicLogo)`
	height: 32px;
	width: auto;
`;

export const Menu = styled(motion.nav)`
	flex: 1;
	display: flex;
	align-items: center;
	font-size: 16px;

	@media (max-width: 1024px) {
		font-size: 14px;
	}
`;

export const SocialLinks = styled.div`
	display: flex;
	align-items: center;
	font-family: 'Roboto', sans-serif;
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

	@media (max-width: 624px) {
		display: none;
	}
`;