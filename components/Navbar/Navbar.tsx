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

  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = 120;

      const opacity = Math.max(0, 1 - scrolled / threshold);

      const els = document.querySelectorAll(".fadeOnScroll");
      els.forEach((el) => {
        const element = el as HTMLElement;

        element.style.opacity = opacity.toString();
        element.style.visibility = opacity === 0 ? "hidden" : "visible";
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navHeader}>
        <span>
          <Link className={styles.navTitle} href="/">Calvin Gomes</Link>
        </span>
        <p className={`${styles.navDescriptionDesktop} fadeOnScroll`}>Frontend Developer at <a href="https://bolser.co.uk/" target="_blank">Bolser</a></p>
        <p className={`${styles.navDescriptionDesktop} fadeOnScroll`}>Currenly based in Chennai, India</p>
        <div className={styles.menuItemsDesktop}>
          {/* <span><Link className={pathname === "/about" ? styles.active : ""} href="/about">About</Link></span> */}
          <span><Link className={pathname === "/experience" ? styles.active : ""} href="/experience">Experience</Link></span>
          <span><Link className={pathname === "/projects" ? styles.active : ""} href="/projects">Projects</Link></span>
          <span><Link className={pathname === "/contact" ? styles.active : ""} href="/contact">Contact</Link></span>
          <span><Link href="/calvin-resume.pdf" download>Resume</Link></span>
        </div>
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
          <span>
            <Link className={styles.overlayTitle} href="/">Calvin Gomes</Link>
          </span>
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
            {/* <li><Link className={pathname === "/about" ? styles.active : ""} href="/about">About</Link></li> */}
            <li><Link className={pathname === "/experience" ? styles.active : ""} href="/experience">Experience</Link></li>
            <li><Link className={pathname === "/projects" ? styles.active : ""} href="/projects">Projects</Link></li>
            <li><Link className={pathname === "/contact" ? styles.active : ""} href="/contact">Contact</Link></li>
            <li><Link href="/calvin-resume.pdf" download>Resume</Link></li>
          </ul>
          <div className={styles.footer}>
            <p>Frontend Developer at Bolser</p>
            <p>Currenly based in Chennai, India</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
