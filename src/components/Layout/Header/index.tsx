import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextComponentType } from "next";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useLayout } from "..";
import navLinks from "./nav";
import * as S from "./styles";

const headerVariants = {
	visible: { y: "0%" },
	hidden: { y: "-100%" }
};

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

const Header: NextComponentType = () => {
	const { pathname } = useRouter();
	const { header, window } = useLayout();
	const { scrollY } = useViewportScroll();
	const headerPadding = useTransform(scrollY, [100, 300], ["42px 80px", "12px 84px"]);
	const headerBoxShadow = useTransform(scrollY, [100, 300], ["0px 0px 0px rgba(0, 0, 0, 0)", "0 10px 30px -10px rgba(30, 30, 30, 0.7)"]);
	const [hidden, setHidden] = useState(false);
	const prevScroll = useRef<number>(0);

	const checkCurrent = (path: string) => (path === pathname);

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
		<S.Root
			style={{ padding: headerPadding, boxShadow: headerBoxShadow }}
			animate={hidden ? "hidden" : "visible"}
			variants={headerVariants}>
			<S.Menu
				initial="hidden"
				animate="visible"
				variants={list}>

				<S.LogoContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
					<S.Logo {...header?.logo} responsive={window.size.width < 800} />
				</S.LogoContainer>

				<S.NavItemsContainer>
					{navLinks.map((link, key) => (
						<Link key={key} href={link.pathname} passHref>
							<S.NavLink variants={item} current={checkCurrent(link.pathname)}>
								<label>{link.label}</label>
							</S.NavLink>
						</Link>
					))}
				</S.NavItemsContainer>

				<S.SocialLinks>
					<Link href="https://github.com/renanzan" passHref>
						<motion.a variants={item}><FaGithub /> Github</motion.a>
					</Link>

					<Link href="https://www.linkedin.com/in/renanzan/" passHref>
						<motion.a variants={item}><FaLinkedin /> Linkedin</motion.a>
					</Link>
				</S.SocialLinks>
			</S.Menu>
		</S.Root>
	);
}

export default Header;