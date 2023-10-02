import styles from "@/styles/Layout.module.css";
import Header from "./Header";
import Meta from "./Meta";

function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className={styles.main}>{children}</div>
    </>
  );
}

export default Layout;
