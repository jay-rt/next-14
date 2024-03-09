import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" className={styles.img} fill />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Sur name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea rows={10} cols={30} placeholder="Message"></textarea>
          <button type="button">Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
