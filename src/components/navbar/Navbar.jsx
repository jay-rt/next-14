import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Jayrt
      </Link>
      <Links />
    </div>
  );
};

export default Navbar;
