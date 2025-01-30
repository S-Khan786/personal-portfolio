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
              <h3>Frontend Developer<a href='https://drive.google.com/file/d/1-h5_ittS_uEuBYGhw06s2WeC-7YZRfqv/view?usp=sharing' target='blank'>Certificate</a></h3>
              <p>I&apos;m a frontend developer with the experience in building responsive and optimized sites</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="../../../assets/about/serverIcon.png" alt="server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer<a href='https://drive.google.com/file/d/1x3Rb3iitWxupRlT9aqVWN37hmSwGeM_4/view?usp=drive_link' target='blank'>Certificate</a></h3>
              <p>I have experience developing fast and optimized back-end systems and API&apos;s</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
