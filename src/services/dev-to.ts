import axios from "axios";

const api = axios.create({
    baseURL: "https://dev.to/api/",
    headers: {
        "api-key": String(process.env.NEXT_PUBLIC_DEV_TO_TOKEN)
    }
});

type fetchArticlesType = {
    page?: number;
    per_page?: number;
}

export function fetchArticles(params?: fetchArticlesType) {
    return api.get("articles/me/published", { params });
}

export default api;