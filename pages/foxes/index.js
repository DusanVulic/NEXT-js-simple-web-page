import React from "react";

import styles from "../../styles/Foxes.module.css";

import Head from "next/head";
//import Link from next
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { foxes: data },
  };
};

const Foxes = ({ foxes }) => {
  return (
    <>
      <Head>
        <title> Fox list | Foxes</title>
        <meta name="keywords" content="paperfox fox list about" />
      </Head>
      <div>
        <h3> All Foxes </h3>
        {foxes.map((fox) => {
          const { id, name } = fox;
          return (
            <Link href={`/foxes/${id}`} key={id}>
              <a className={styles.single}>
                <h4>{name}</h4>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Foxes;
