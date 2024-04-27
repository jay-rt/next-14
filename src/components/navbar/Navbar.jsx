import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Jayrt
      </Link>
      <Links session={session} />
    </div>
  );
};

export default Navbar;
