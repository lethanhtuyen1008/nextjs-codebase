import { axiosInstance } from "src/providers/axiosInstance";
import { apiEndpoints } from "src/constants/apiEndpoints";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any[]>
) {
    const url = req.url?.replace(apiEndpoints.EMPLOYEE, "") || "";

    const data = await axiosInstance.xOriginsToken().get(url);

    res.status(200).json(data.data || []);
}
