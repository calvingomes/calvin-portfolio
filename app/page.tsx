import styles from "./page.module.css";
import HomeHero from "@/components/HomeHero/HomeHero";

export default function Home() {
  return (
    <div className={styles.appContainer}>
      <HomeHero />
      <HomeHero />
      <HomeHero />
    </div>
  );
}
