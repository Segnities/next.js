import Head from "next/head";
import Link from "next/link";
import Post from "../../components/post";
import { getAllPosts } from "../../lib/getPlaceholderPosts"

import styles from "../../styles/Posts.module.css";

export async function getStaticProps() {
    const posts = await getAllPosts();
    return {
        props: {
            posts
        }
    }
}

export default function Posts({ posts }) {
    return (
        <div>
            <Head>
                <title>Posts</title>
            </Head>
            <div className={styles['home-link']}>
                <code> <Link href='/'>&rarr; Back to home</Link></code>
            </div>
            <section className={styles.posts}>
                <h2>Posts</h2>
                {
                    posts.map(post => <Post key={post.id} id={post.id} title={post.title} body={post.body} />)
                }
            </section>
        </div>
    )
}