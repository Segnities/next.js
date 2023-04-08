import Head from "next/head";
import Layout from "../../components/layout";

import { getAllPostsIds, getPostById } from "../../lib/getPlaceholderPosts";


export async function getStaticPaths() {
    const paths = await getAllPostsIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getPostById(params.id);

    return {
        props: {
            post
        }
    }
}

export default function Post({ post }) {
    return (
        <Layout>
            <Head>
                <title>Post {post.title.slice(0, 20)}...</title>
            </Head>
            <article>
                <h1>{post.title}</h1>
                <p>
                    {post.body}
                </p>
            </article>
        </Layout>
    );
}

