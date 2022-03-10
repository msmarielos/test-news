import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Card.module.css";
import { News } from "../types";
import { formatDate } from "../utils/date";

function Card({ post, loading }: { post?: News; loading: boolean }) {
  const { locale } = useRouter();

  return (
    <>
      {loading || !post ? (
        <li className={styles.empty}></li>
      ) : (
        <li className={styles.card}>
          <img className={styles.photo} src={post.image_big} alt={post.title} />
          <span className={styles.text_date}>
            {formatDate(post.date, locale)}
          </span>
          <span className={styles.text}>
            <Link href="/news/[id]" as={`/news/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </span>
        </li>
      )}
    </>
  );
}

export default Card;
