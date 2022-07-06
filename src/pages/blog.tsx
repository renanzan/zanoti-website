import type { NextPage } from "next";
import { Fragment } from "react";

import PageSeo from "components/PageSeo";
import BlogTemplate from "templates/blog";
import { fetchArticles } from "services/dev-to";

type BlogPageType = {
	articles: Array<any>;
}

const BlogPage: NextPage<BlogPageType> = ({ articles }) => {
	return (
		<Fragment>
			<PageSeo
				title="Blog"
				description="Últimas postagens de Renan Zanoti." />

			<BlogTemplate articles={articles} />
		</Fragment>
	);
}

export async function getStaticProps() {
	try {
		const { data } = await fetchArticles();

		return { props: { articles: data } };
	} catch (err) {
		return { props: { articles: [] } };
	}
}


export default BlogPage;