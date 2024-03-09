import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>jayrt</div>
      <div className={styles.text}>
        Jayrt creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
