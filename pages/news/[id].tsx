import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Post.module.css";
import Layout from "../../components/Layout";
import { News } from "../../types";
import { getHtml } from "../../utils/html";
import { getLocaleId } from "../../utils/locale";

export default function Post() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<News | null>(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    setLoading(true);

    fetch(`/api/news/${id}?language_id=${getLocaleId(router.locale)}`)
      .then((reponse) => reponse.json())
      .then((result) => {
        setPost(result);
        setLoading(false);
      });
  }, [id, router.locale]);

  return (
    <Layout title="Новости и события">
      {loading ? (
        <h2>Загрузка...</h2>
      ) : (
        <>
          <h2 className={styles.title}>{post!.title}</h2>
          <div className={styles.card}>
            <img
              className={styles.photo}
              src={post!.image_big}
              alt={post!.title}
            />
            <span className={styles.text}>
              <p dangerouslySetInnerHTML={getHtml(post!.lead)} />
            </span>
          </div>
        </>
      )}
    </Layout>
  );
}
