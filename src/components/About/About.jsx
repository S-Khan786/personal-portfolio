import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="../../../assets/about/aboutImage.png"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="../../../assets/about/cursorIcon.png" alt="cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developr</h3>
              <p>Lorem</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="../../../assets/about/serverIcon.png" alt="server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developr</h3>
              <p>Lorem</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="../../../assets/about/uiIcon.png" alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>Lorem</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
