"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  
  const [open, setOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const closeMenu = () => {
    setFadeOut(true);

    setTimeout(() => {
      setOpen(false);
      setFadeOut(false);
    }, 350);
  };

  useEffect(() => {
    const handler = () => {
      setOpen(false);
    };

    window.addEventListener("force-close-menu", handler);

    return () => window.removeEventListener("force-close-menu", handler);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navHeader}>
        <h1>Calvin Gomes</h1>
        <button
          className={styles.openButton}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          Menu
        </button>
      </div>

      <div
        className={`
          ${styles.overlay}
          ${open ? styles.open : ""}
          ${fadeOut ? styles.fadeOut : ""}
        `}
      >
        <div className={styles.overlayHeader}>
          <h1>Calvin Gomes</h1>
          <button
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <div className={styles.overlayContent}>
          <ul className={styles.menuList}>
            <li><Link className={pathname === "/" ? styles.active : ""} href="/">Home</Link></li>
            <li><Link className={pathname === "/about" ? styles.active : ""} href="/about">About</Link></li>
            <li><Link className={pathname === "/experience" ? styles.active : ""} href="/experience">Experience</Link></li>
            <li><Link className={pathname === "/projects" ? styles.active : ""} href="/projects">Projects</Link></li>
            <li><Link className={pathname === "/contact" ? styles.active : ""} href="/contact">Contact</Link></li>
          </ul>
          <p>Frontend Developer <br/>at Bolser</p>
          <p>Currenly based at <br/>Chennai, India</p>
        </div>
      </div>
    </nav>
  );
}
