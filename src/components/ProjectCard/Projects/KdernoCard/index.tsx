import { useEffect, useState } from "react";
import { NextComponentType } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

import * as S from "./styles";
import OpenCard from "./OpenCard";
import { useLayout } from "components/Layout";

const ProjectKderno: NextComponentType = () => {
	const router = useRouter();
	const { setHeaderConfig } = useLayout();
	const [open, setOpen] = useState(false);

	function handleOpen() {
		router.push("?current=kderno", undefined, { shallow: true });
	}

	useEffect(() => {
		if (!open) {
			document.body.style.overflow = "auto";
		} else {
			setHeaderConfig({ blur: false, primaryColor: "#373939", simplified: true });
			document.body.style.overflow = "hidden";
		}
	}, [open]);

	useEffect(() => {
		if (router.query?.current === "kderno")
			setOpen(true);
		else
			setOpen(false);
	}, [router.query]);

	if (open)
		return (
			<OpenCard />
		);

	return (
		<S.Root
			onClick={handleOpen}
			whileHover={{
				y: -5,
				transition: { duration: 0.25 },
			}}>
			<S.LogoContainer>
				<Image src="/assets/icons/whitescale-kderno-logo.svg" layout="fill" />
			</S.LogoContainer>

			<S.Description layout="position">
				O Kderno foi o primeiro projeto profisional que estive envolvido. Com uma pequena equipe de desenvolvedores tivemos o grande desafio de desenvolver um editor de texto rico...
			</S.Description>
		</S.Root>
	);
}

export default ProjectKderno;