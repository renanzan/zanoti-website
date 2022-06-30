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
					<Image src="/assets/icons/whitescale-kderno-logo.svg" layout="fill" />
				</S.LogoContainer>

				<S.Description layout="position">
					{`O Kderno foi o primeiro projeto profisional que estive envolvido. Com uma pequena equipe de desenvolvedores tivemos o grande desafio de desenvolver um editor de texto rico com blocos complexos.
					
					Houveram muitos desafios, desde problemas não muito usuais como a manipulação do caret ao alternar o foco entre multiplos inputs na mesma página utilizando das teclas direcionais do teclado, até problemas de estrutura de dados e performance, buscando definir as melhores formas de persistir os dados no banco de dados.
					
					Tivemos erros, acertos e muito aprendizado durante o desenvolvimento, mesmo com uma equipe pequena pussuíamos uma boa sinergia e acredito que no final o saldo foi positivo, fico feliz com o resultado obtido.`}
				</S.Description>

				<S.Video autoPlay loop playsInline data-wf-ignore="true" data-object-fit="cover" muted>
					<source src="https://uploads-ssl.webflow.com/6054eb2270c43945cc99e8d4/6054eb2270c439da6099e934_Teste%20Bordas-transcode.mp4" data-wf-ignore="true"></source>
					<source src="https://uploads-ssl.webflow.com/6054eb2270c43945cc99e8d4/6054eb2270c439da6099e934_Teste%20Bordas-transcode.webm" data-wf-ignore="true"></source>
				</S.Video>

				<S.MoreInfo>
					{`O Kderno é um editor de texto complexo com múltiplas funcionalidades. Sua proposta é dar autonomia para criação de conteúdo rico da maneira mais simples possível a fim de atender qualquer perfil de usuário.
					
					O editor é capaz de interpretar markdown em tempo real durante a escrita, isso permite que o usuário customize facilmente seu conteúdo e tenha um feedback imediato de como a página será vista por outros usuários. Para agregar conteúdo rico ao texto desenvolvemos blocos dinâmicos que podem ser adicionados a qualquer momento na página, assim, abstraindo a complexidade da codificação de um checkout de compra, por exemplo.
					
					Adicionar esse conteúdo rico ficou muito mais fácil com o Kderno, tão simples e direto quanto preencher um formulário especificando como o componente deve se comportar.`}
				</S.MoreInfo>
			</S.Content>
		</S.Root>
	);
}

export default OpenCard;