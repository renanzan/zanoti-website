import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";

import * as T from "./types";
import * as S from "./styles";

const Post: NextComponentType<{}, {}, T.PostType> = ({ article: { title, description, cover_image, tag_list, canonical_url } }) => {
	return (
		<Link href={canonical_url} passHref>
			<S.Root>
				<S.Title>{title}</S.Title>
				<S.Description>{description}</S.Description>

				<S.CoverImage>
					{cover_image && (
						<Image src={cover_image} layout="fill" />
					)}
				</S.CoverImage>

				<S.Divisor />

				<S.TagList>
					<li>Artigo</li>

					{tag_list.map((tag, idx) => (
						<S.Tag key={idx}>{tag}</S.Tag>
					))}
				</S.TagList>
			</S.Root>
		</Link>
	);
}

export default Post;