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
					{`A Clipping é uma plataforma React que reúne uma extensa gama de conteúdo para aulas EAD. O projeto já tinha grandes dimensões quando integrei a equipe, fui responsável pela manutenção e desenvolvimento de novas features da plataforma.`}
				</S.Description>

				<S.ImageContainer>
					<Image src="/assets/images/clipping-preview.png" layout="fill" />
				</S.ImageContainer>

				<S.MoreInfo>
					{`Coordenei o desenvolvimento de uma lib React para o Design System da plataforma baseado nos princípios do Atomic Design. Utilizamos o storybook para documentar os componentes e implementamos testes unitários para garantir o funcionamento de cada componente da biblioteca.`}
				</S.MoreInfo>
			</S.Content>
		</S.Root>
	);
}

export default OpenCard;