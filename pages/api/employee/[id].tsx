import { axiosInstance } from "libs/providers/axiosInstance";
import { buildSSRRequestUrl } from "libs/helpers/utils";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = buildSSRRequestUrl(req.url);

  const data = await axiosInstance.authenticatedToken(req).get(url);

  res.status(200).json(data.data || {});
}
