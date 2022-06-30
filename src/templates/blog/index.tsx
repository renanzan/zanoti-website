import type { NextPage } from "next";

import Layout from "components/Layout";
import Post from "components/Post";
import ComingSoonPost from "components/Post/ComingSoon";

import * as S from "./styles";

type BlogTemplateType = {
	articles: Array<any>;
}

const BlogTemplate: NextPage<BlogTemplateType> = ({ articles }) => {
	return (
		<Layout
			title="Renan Zanoti ― Blog"
			waterMarkSection="Blog">

			<S.ArticlesContainer>
				{articles.map((article, idx) => (
					<Post key={idx} article={article} />
				))}

				{(3 - articles.length > 0) && [...Array(3 - articles.length)].map((_, key) => (
					<ComingSoonPost />
				))}
			</S.ArticlesContainer>
		</Layout>
	)
}

export default BlogTemplate;
