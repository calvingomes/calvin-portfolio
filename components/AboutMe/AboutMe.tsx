import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <>
      <div className={styles.aboutMeMobile}>
        <p>01/ About</p>
        <p className={styles.aboutMeContent1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in ex, nostrum consequuntur optio minima corrupti ipsa molestias officia ipsum!</p>
        <p className={styles.aboutMeContent2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in ex, nostrum consequuntur optio quidem similique dolor repellendus minima corrupti ipsa molestias officia ipsum!</p>
        <p className={styles.aboutMeContent3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in ex, nostrum consequuntur optio eum eos porro, unde obcaecati accusamus quidem similique dolor repellendus minima corrupti ipsa molestias officia ipsum!</p>
      </div>

      <div className={styles.aboutMeDesktop}>
        <div className={styles.desktopLeftContent}>
          <p>01/ About</p>
        </div>
        <div className={styles.desktopRightContent}>
          <p className={styles.aboutMeContent1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in ex, nostrum consequuntur optio minima corrupti ipsa molestias officia ipsum!</p>
          <p className={styles.aboutMeContent2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in ex, nostrum consequuntur optio quidem similique dolor repellendus minima corrupti ipsa molestias officia ipsum!</p>
          <p className={styles.aboutMeContent3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in ex, nostrum consequuntur optio eum eos porro, unde obcaecati accusamus quidem similique dolor repellendus minima corrupti ipsa molestias officia ipsum!</p>
        </div>
      </div>
    </>
  )
}