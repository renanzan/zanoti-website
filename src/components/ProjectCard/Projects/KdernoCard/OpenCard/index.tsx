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
				Kderno
			</S.WaterMark>

			<S.Content>
				<S.LogoContainer>
					<Image src="/assets/icons/kderno-logo.svg" layout="fill" />
				</S.LogoContainer>

				<S.Description layout="position">
					O Kderno foi o primeiro projeto profisional que estive envolvido, com uma pequena equipe tivemos o desafio de desenvolver um editor de texto rico com blocos complexos. Foi uma experiência muito desafiadora, tivemos que lidar com problemas não muito comuns, como a manipulação do caret para transicionar entre múltiplos inputs ao comando das seta do teclado, para passar a senação de um editor fluido, até problemas envolvendo estrutura de dados, buscando definir as melhores formas de persistir os dados desse editor rico no banco de dados. No final, o saldo foi positivo, com erros, acertos e muito aprendizado.
				</S.Description>

				<S.Video autoPlay loop playsInline data-wf-ignore="true" data-object-fit="cover" muted>
					<source src="https://uploads-ssl.webflow.com/6054eb2270c43945cc99e8d4/6054eb2270c439da6099e934_Teste%20Bordas-transcode.mp4" data-wf-ignore="true"></source>
					<source src="https://uploads-ssl.webflow.com/6054eb2270c43945cc99e8d4/6054eb2270c439da6099e934_Teste%20Bordas-transcode.webm" data-wf-ignore="true"></source>
				</S.Video>

				<S.MoreInfo>
					Desenvolvemos um editor WYSIWYG capaz de interpretar e converter markdown em tempo real durante a escrita!
					A aplicação também dispunha de diferentes blocos complexos e transparentes adaptados especificamente para a educação onde é possível projetar e vender praticamente qualquer tipo de experiência de aprendizado sem codificação, com foco total no conteúdo!
				</S.MoreInfo>
			</S.Content>
		</S.Root>
	);
}

export default OpenCard;