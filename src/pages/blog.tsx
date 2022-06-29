import type { NextPage } from "next";

import BlogTemplate from "templates/blog";
import { getArticles } from "services/api";

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
		const { data } = await getArticles();

		return { props: { articles: data } };
	} catch (err) {
		return { props: { articles: [] } };
	}
}


export default BlogPage;