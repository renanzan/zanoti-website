import type { NextPage } from "next";

import Layout from "components/Layout";

import * as S from "./styles";
import ContactForm from "components/ContactForm";

const ContactTemplate: NextPage = () => {
	return (
		<Layout
			title="Renan Zanoti ― Contato"
			waterMarkSection="Contato">

			<S.Content>
				<S.CardCointainer>
					Hello World
					<ContactForm />
				</S.CardCointainer>

				<S.MoreInfo>
					Você também pode me enviar um email mais elaborado para <strong>rh.zanoti@gmail.com</strong>
				</S.MoreInfo>
			</S.Content>
		</Layout>
	)
}

export default ContactTemplate;
