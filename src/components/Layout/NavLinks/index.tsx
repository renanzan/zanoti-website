import { NextComponentType } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { Variants } from "framer-motion";

import navLinks from "./nav";
import * as S from "./styles";

type NavLinksProps = {
	variants?: Variants;
	className?: string;
}

const NavLinks: NextComponentType<{}, {}, NavLinksProps> = ({ variants, className }) => {
	const { pathname } = useRouter();

	const checkCurrent = (path: string) => (path === pathname);

	return (
		<S.NavItemsContainer className={className}>
			{navLinks.map((link, key) => (
				<Link key={key} href={link.pathname} passHref>
					<S.NavLink variants={variants} $current={checkCurrent(link.pathname)}>
						<label>{link.label}</label>
					</S.NavLink>
				</Link>
			))}
		</S.NavItemsContainer>
	);
}

export default NavLinks;