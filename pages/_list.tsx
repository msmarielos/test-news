import { useRouter } from "next/router";
import styles from "../styles/List.module.css";
import { News } from "../types";
import { getLocaleTitle } from "../utils/locale";
import Card from "./_card";

function List({ posts, loading }: { posts: News[]; loading: boolean }) {
  const placeholders = new Array(9).fill(undefined);
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.text}>{getLocaleTitle(router.locale)}</h3>
        <ul className={styles.list}>
          {loading
            ? placeholders.map((_, idx) => <Card key={idx} loading={true} />)
            : posts.map((post) => (
                <Card key={post.id} post={post} loading={false} />
              ))}
        </ul>
      </div>
    </>
  );
}

export default List;
