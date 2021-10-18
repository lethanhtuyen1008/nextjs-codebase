import { axiosInstance } from "libs/providers/axiosInstance";
import { apiEndpoints } from "libs/commons/apiEndpoints";
import type { NextApiRequest, NextApiResponse } from "next";

const formatUrl = (req: NextApiRequest) => {
  const { page, limit } = req.query;
  const params = [];

  page && params.push(`page=${req.query.page}`);
  limit && params.push(`limit=${limit}`);
  return apiEndpoints.EMPLOYEE + "?" + params.join("&");
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  const url = formatUrl(req);
  const data = await axiosInstance.authenticatedToken(req).get(url);

  res.status(200).json(data?.data || [{}]);
}
