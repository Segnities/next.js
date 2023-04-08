import Head from "next/head";
import Link from "next/link";

import utilStyles from "../../styles/utils.module.css";

import Layout from "../../components/layout";

import { getSortedPostsData } from "../../lib/getMdPosts"

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData
        }
    }
}

function FirstPost({ allPostsData }) {
    return (
        <Layout home>
            <div>
                <Head>
                    <title>First post</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <header>
                    <h1>First post!</h1>
                    <h2><Link href="/">Get to home</Link></h2>
                </header>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                {title}
                                <br />
                                {id}
                                <br />
                                {date}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </Layout>
    );
}

export default FirstPost;