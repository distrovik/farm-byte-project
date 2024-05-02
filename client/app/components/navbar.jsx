"use client"
import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentRoute = usePathname();

  return (
    //Navbar with usePathname for ease of navigating between pages
    <nav className={styles.navbar}>
      <div className={styles.icon}>
        <Link href="/">
        <img src="/favicon.ico" alt="logo" className="w-10 h-10"/>
        </Link>
      </div>
  
      <div className={styles.links}>
        <Link
          className={currentRoute === "/" ? styles.Tlink : styles.Flink}
          href="/"
        >
          Home
        </Link>

        <Link
          className={currentRoute === "/product-page" ? styles.Tlink : styles.Flink}
          href="/product-page"
        >
          Products
        </Link>
        <Link
          className={currentRoute === "/add-new-product" ? styles.Tlink : styles.Flink}
          href="/add-new-product"
        >
          Add-Product
        </Link>
      </div>
    </nav>
  );
}
