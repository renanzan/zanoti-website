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
				<ContactForm />
			</S.Content>
		</Layout>
	)
}

export default ContactTemplate;
