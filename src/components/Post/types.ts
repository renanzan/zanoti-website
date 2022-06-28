export type PostType = {
    article: {
        title: string;
        description: string;
        cover_image?: string;
        tag_list: Array<string>;
        canonical_url: string;
    }
}