import React from "react";
import Link from "next/link";
import { NextComponentType } from "next";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";

import { useLayout } from "..";
import NavLinks from "../NavLinks";
import * as S from "./styles";
import HeaderVariants from "./Variants";

const list = {
	visible: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			when: "afterChildren",
		},
	},
};

const item = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: -25 },
};

export type HeaderConfig = {
	blur?: boolean;
	primaryColor?: string;
	secondaryColor?: string;
	navLinks?: boolean;
	socialLinks?: boolean;
	simplified?: boolean;
}

type HeaderProps = {
	config: HeaderConfig;
}

export const defaultHeaderConfig: HeaderConfig = {
	blur: true,
	primaryColor: "#6EF2A3",
	secondaryColor: "#FFFFFF",
	navLinks: true,
	socialLinks: true,
	simplified: false
}

const Header: NextComponentType<{}, {}, HeaderProps> = ({ config }) => {
	const { headerConfig, window } = useLayout();

	return (
		<HeaderVariants>
			<S.Menu
				initial="hidden"
				animate="visible"
				variants={list}>

				<Link href="/">
					<S.LogoContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
						<S.Logo
							primary={headerConfig.primaryColor}
							secondary={headerConfig.secondaryColor}
							responsive={window.size.width < 800} />
					</S.LogoContainer>
				</Link>

				<NavLinks show={config.navLinks} variants={item} />

				<S.SocialLinks show={config.socialLinks} primary={config.primaryColor}>
					<Link href="https://github.com/renanzan" passHref>
						<motion.a variants={item} target="_blank"><FaGithub size={24} /> Github</motion.a>
					</Link>

					<Link href="https://www.linkedin.com/in/renanzan/" passHref>
						<motion.a variants={item} target="_blank"><FaLinkedin size={24} /> Linkedin</motion.a>
					</Link>

					<Link href="/contact" passHref>
						<S.MailLink primary={config.primaryColor} variants={item}><GoMail size={24} /></S.MailLink>
					</Link>
				</S.SocialLinks>
			</S.Menu>
		</HeaderVariants>
	);
}

export default Header;