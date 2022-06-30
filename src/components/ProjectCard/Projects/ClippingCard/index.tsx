import { useEffect, useState } from "react";
import { NextComponentType } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

import * as S from "./styles";
import { useLayout } from "components/Layout";
import OpenCard from "./OpenCard";

const ProjectClipping: NextComponentType = () => {
	const router = useRouter();
	const { setHeaderConfig } = useLayout();
	const [open, setOpen] = useState(false);

	function handleOpen() {
		router.push("?current=clipping", undefined, { shallow: true });
	}

	useEffect(() => {
		if (!open) {
			document.body.style.overflow = "auto";
		} else {
			document.body.style.overflow = "hidden";
			setHeaderConfig({ blur: false, primaryColor: "#2D2E32", secondaryColor: "#2D2E32", simplified: true });
		}
	}, [open]);

	useEffect(() => {
		if (router.query?.current === "clipping")
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
				<Image src="/assets/icons/clipping-logo.svg" layout="fill" />
			</S.LogoContainer>

			<S.Description layout="position">
				A Clipping é uma plataforma React que reúne uma extensa gama de conteúdo para aulas EAD...
			</S.Description>
		</S.Root>
	);
}

export default ProjectClipping;