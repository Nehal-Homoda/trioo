import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    message: string;
};

const token: string =
    "dvq_qKwNRUypYp2UmqHeMU:APA91bF5AnpHwGN3vuuPClaPDQv9YaLXQKJVpB7_VHLHphDE3NFxioWlK1kTscOEdAQGKpMBRMOv5dCbv1C7xz2KN7jgI9Sn8MmMCvHQzF6isilh1rqtjWlPpUOFrssqKFu4gd3sA-FZ";
const headers = {
    Accept: "application/json",
    "client-type": "web",
    "Content-Type": "application/json",
    lang: "en",
    Authorization: `Bearer ${token || ""}`,
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {}
