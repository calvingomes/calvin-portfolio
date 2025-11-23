import Image from 'next/image';
import styles from './HomeHero.module.css';

export default function HomeHero() {
  return (
    <div className={styles.homeHero}>
      <p className={styles.heroDescriptionMobile}>I support Designers and Agencies with creative development</p>
      <h2 className={styles.heroTitle}>Frontend Developer</h2>
      <Image
        src="https://placehold.jp/340x290.png"
        height={290}
        width={340}
        alt="Picture of the author"
        className={styles.heroPicMobile}
      />

      <Image
        src="https://placehold.jp/800x260.png"
        height={260}
        width={800}
        alt="Picture of the author"
        className={styles.heroPicDesktop}
      />

      <div className={styles.heroNameContainer}>
        <p className={styles.heroDescriptionDesktop}>I support Designers and Agencies with creative development</p>
        <h2 className={styles.heroName}>Calvin Gomes</h2>
      </div>
    </div>
  )
}