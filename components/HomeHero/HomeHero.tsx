import Image from 'next/image';
import styles from './HomeHero.module.css';

export default function HomeHero() {
  return (
    <div className={styles.homeHero}>
      <p className={styles.heroDescriptionMobile}>I support Designers and Agencies with creative development</p>
      <h2 className={styles.heroTitle}>Frontend Developer</h2>
      
      <div className={styles.heroPicMobileWrapper}>
        <Image
          src="/images/cal-portrait-1.jpg"
          alt="Calvin portrait"
          fill
          className={styles.heroPicMobile}
          sizes="360px"
        />
      </div>

      <div className={styles.heroPicDesktopWrapper}>
        <Image
          src="/images/cal-portrait-1.jpg"
          alt="Calvin portrait"
          fill
          className={styles.heroPicDesktop}
          sizes="800px"
        />
      </div>

      <div className={styles.heroNameContainer}>
        <p className={styles.heroDescriptionDesktop}>I support Designers and Agencies with creative development</p>
        <h2 className={styles.heroName}>Calvin Gomes</h2>
      </div>
    </div>
  )
}