import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Home page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus harum
        suscipit aperiam ipsum quod rerum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus harum
        suscipit aperiam ipsum quod rerum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus harum
        suscipit aperiam ipsum quod rerum!
      </p>
      <Link href="/foxes">
        <a>See foxes listing</a>
      </Link>
    </div>
  );
}
