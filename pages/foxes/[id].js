import React from "react";

//import Link from next
import Link from "next/link";

///import css

import styles from "../../styles/Details.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const data = await response.json();

  return {
    props: { fox: data },
  };
};

const Details = ({ fox }) => {
  const { name, email, website, address } = fox;

  return (
    <>
      <div>
        <h1>{name} </h1>
        <p>{email}</p>
        <p>{website}</p>
        <p>{address.city}</p>
      </div>
      <div>
        <Link href="/foxes">
          <a className={styles.btn}> go back to fox page</a>
        </Link>
      </div>
    </>
  );
};

export default Details;
