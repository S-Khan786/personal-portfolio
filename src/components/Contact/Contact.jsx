import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to react out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="../../../assets/contact/emailIcon.png" alt="Email Icon" />
          <a href="mailto:myemail@email.com">msahilkhan846@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="../../../assets/contact/linkedinIcon.png"
            alt="Linkedin Icon"
          />
          <a href="https://www.linkedin.com/in/mohammad-sahil-a23696200">
            Linkedin.com/MohammadSahil
          </a>
        </li>
        <li className={styles.link}>
          <img src="../../../assets/contact/githubIcon.png" alt="Github Icon" />
          <a href="https://github.com/S-Khan786">github.com/MohammadSahil</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
