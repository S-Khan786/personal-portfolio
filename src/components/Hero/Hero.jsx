import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am A</h1>
        <p className={styles.description}>I am a full-stack developer with 5 years of experience of ReactJS and NodeJS </p>
        <a href="mshahilkhan846@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img className={styles.heroImg} src="../../../assets/hero/heroImage.png" alt="Hero image of me"/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
