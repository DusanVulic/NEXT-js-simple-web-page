import Head from "next/head";

import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title> Fox list | Home</title>
        <meta name="keywords" content="paperfox fox list" />
      </Head>
      <div>
        <h2 className={styles.title}>Home page</h2>
        <div className="container">
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus harum
            suscipit aperiam ipsum quod rerum!
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus harum
            suscipit aperiam ipsum quod rerum!
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus harum
            suscipit aperiam ipsum quod rerum!
          </p>
        </div>

        <Link href="/foxes">
          <a className={styles.btn}>See foxes listing</a>
        </Link>
      </div>
    </>
  );
}
