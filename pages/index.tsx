import { useState, useEffect } from "react";
import List from "./_list";
import { News } from "../types";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { getLocaleId } from "../utils/locale";

export default function Home() {
  const { locale } = useRouter();

  const [data, setData] = useState<News[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`api/news?language_id=${getLocaleId(locale)}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.news);
        setLoading(false);
      });
  }, [locale]);

  return (
    <Layout title="Новости и события">
      <List posts={data} loading={loading} />
    </Layout>
  );
}
