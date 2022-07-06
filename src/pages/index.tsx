import type { NextPage } from "next";
import { Fragment } from "react";

import PageSeo from "components/PageSeo";
import HomeTemplate from "templates/home";

const Home: NextPage = () => {
	return (
		<Fragment>
			<PageSeo />

			<HomeTemplate />
		</Fragment>
	);
}

export default Home;