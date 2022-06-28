import type { NextApiRequest, NextApiResponse } from "next";

import { fetchArticles } from "services/dev-to";

// GET /api/dev-to/article
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page, per_page } = req.query;
  
  try {
    const { data } = await fetchArticles({
      page: page ? Number(page) : undefined,
      per_page: per_page ? Number(per_page) : undefined
    });
    
    res.json(data);
  } catch(err: any) {
    return res.status(err?.response?.status || 500).send(err?.response?.data || err);
  }
}