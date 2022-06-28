import type { NextPage } from "next";

import BlogTemplate from "templates/blog";
import { useEffect, useState } from "react";
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
		const res = await fetch("https://dev.to/api/articles/me/published", {
			headers: {
				"api-key": String(process.env.NEXT_PUBLIC_DEV_TO_TOKEN)
			}
		});

		const data = await res.json()

		return { props: { articles: data } };
	} catch(err) {
		return { props: { articles: [] } };
	}
}


export default BlogPage;