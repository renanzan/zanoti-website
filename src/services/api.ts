import axios from "axios";

type getArticlesType = {
    page?: number;
    per_page?: number;
}

export function getArticles(params?: getArticlesType) {
    return axios.get("/api/dev-to/article", { params });
}