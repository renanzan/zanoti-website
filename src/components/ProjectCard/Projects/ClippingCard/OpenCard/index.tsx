import { useLayout } from "components/Layout";
import { NextComponentType } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdClose as CloseIcon } from "react-icons/md";

import * as S from "./styles";

const OpenCard: NextComponentType = () => {
	const router = useRouter();
	const { resetHeader } = useLayout();

	function handleClose() {
		router.push(router.pathname, undefined, { shallow: true });
		resetHeader();
	}

	return (
		<S.Root onClick={handleClose}>
			<S.CloseButton>
				<CloseIcon size={32} />
			</S.CloseButton>

			<S.WaterMark>
				Clipping
			</S.WaterMark>

			<S.Content>
				<S.LogoContainer>
					<Image src="/assets/icons/clipping-logo.svg" layout="fill" />
				</S.LogoContainer>

				<S.Description layout="position">
					Uma plataforma criada para democratizar o estudo para concursos públicos, como o concurso para diplomata, reunindo vide-aulas, conteúdo escrito e simulados em um único sistema web...
				</S.Description>
			</S.Content>
		</S.Root>
	);
}

export default OpenCard;