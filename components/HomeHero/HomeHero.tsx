import Image from 'next/image';
import styles from './HomeHero.module.css';

export default function HomeHero() {
  return (
    <div className={styles.homeHero}>
      <p className={styles.heroDescription}>I support Designers and Agencies with creative development</p>
      <h2 className={styles.heroTitle}>Frontend Developer</h2>
      <Image
        src="https://placehold.jp/320x290.png"
        width={320}
        height={290}
        alt="Picture of the author"
        className={styles.heroPic}
      />
      {/* <div className={styles.heroNameContainer}> */}
        <h2 className={styles.heroName}>Calvin Gomes</h2>
      {/* </div> */}
    </div>
  )
}