"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./PageTransition.module.css";

export default function PageTransition() {
  const pathname = usePathname();
  const [active, setActive] = useState(true);

  useEffect(() => {
    requestAnimationFrame(() => {
      setActive(false);
    });
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      setActive(true);
    });

    setTimeout(() => {
      window.dispatchEvent(new Event("force-close-menu"));
    }, 250);

    setTimeout(() => {
      setActive(false);
    }, 450);
  }, [pathname]);

  return (
    <div
      className={`${styles.overlay} ${active ? styles.active : ""}`}
    />
  );
}
