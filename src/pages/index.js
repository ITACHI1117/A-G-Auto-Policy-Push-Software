import Head from "next/head";
import { Inter } from "next/font/google";
import ArticleList from "@/components/ArticleList";
import styles from "@/styles/Layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }) {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}
