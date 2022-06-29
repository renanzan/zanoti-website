import type { NextPage } from "next";

import BlogTemplate from "templates/blog";
import { fetchArticles } from "services/dev-to";

type BlogPageType = {
	articles: Array<any>;
}

const BlogPage: NextPage<BlogPageType> = ({ articles }) => {
	return (
		<BlogTemplate articles={articles} />
	)
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