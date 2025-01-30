import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const fullStackText = "Full Stack Developer";
  const softwareText = "Software Engineer";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [role, setRole] = useState(fullStackText);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150; // Faster deletion speed
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < role.length) {
        // Typing effect
        setText((prev) => prev + role[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      } else if (isDeleting && currentIndex > 0) {
        // Deleting effect
        setText((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      } else if (!isDeleting && currentIndex === role.length) {
        // Start deleting after a delay
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentIndex === 0) {
        // Switch text when deletion is complete
        setRole((prev) => (prev === fullStackText ? softwareText : fullStackText));
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex, role]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I am a <span className={styles.animatedText}>{text}</span></h1>
        <a
          href="mailto:mshahilkhan846@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src="../../../assets/hero/heroImage.png"
        alt="Hero image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
