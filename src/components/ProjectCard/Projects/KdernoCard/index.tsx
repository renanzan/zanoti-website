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

		setHeaderConfig({ blur: false, primaryColor: "#373939", simplified: true });
	}

	useEffect(() => {
		if (!open) {
			document.body.style.overflow = "auto";
		} else {
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
		<S.Root onClick={handleOpen}>
			<S.LogoContainer>
				<Image src="/assets/icons/kderno-logo.svg" layout="fill" />
			</S.LogoContainer>

			<S.Description>
				O Kderno foi o primeiro projeto profisional que estive envolvido, com uma pequena equipe tivemos o desafio de desenvolver um editor de texto rico com blocos complexos...
			</S.Description>
		</S.Root>
	);
}

export default ProjectKderno;