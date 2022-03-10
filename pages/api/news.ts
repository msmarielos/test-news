import { fetchList } from "../../api/news";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  res.status(200).json(await fetchList(req.query));
};

export default handler;
