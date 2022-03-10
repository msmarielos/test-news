import { NextApiHandler } from "next";
import { fetchItem } from "../../../api/news";

const handler: NextApiHandler = async (req, res) => {
  const { id } = req.query as { id: string };

  res.status(200).json(await fetchItem(Number(id), req.query));
};

export default handler;
