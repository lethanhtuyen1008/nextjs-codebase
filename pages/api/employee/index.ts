import { axiosInstance } from "src/providers/axiosInstance";
import { apiEndpoints } from "src/commons/apiEndpoints";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  const data = await axiosInstance
    .authenticatedToken(req)
    .get(apiEndpoints.EMPLOYEE);

  res.status(200).json(data.data || [{}]);
}
