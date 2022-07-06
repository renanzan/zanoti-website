import { Fragment } from "react";
import type { NextPage } from "next";

import PageSeo from "components/PageSeo";
import ContactTemplate from "templates/contact";

const ContactPage: NextPage = () => {
	return (
		<Fragment>
			<PageSeo
				title="Contato"
				description="Entre em contato com o desenvolvedor Front-end Renan Zanoti." />

			<ContactTemplate />
		</Fragment>
	);
}


export default ContactPage;