import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <Links />
    </div>
  );
};

export default Navbar;
