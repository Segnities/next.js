import Link from "next/link";
import styles from "./styles/post.module.css";

export default function Post({ id, title, body }) {
    return (
        <div className={styles.post}>
            <h3><Link href={`/posts/${id}`}>{title}</Link></h3>
            <p>{body}</p>
        </div>
    );
}