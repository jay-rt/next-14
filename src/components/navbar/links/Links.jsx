"use client";

import NavLink from "./navlink/NavLink";
import styles from "./links.module.css";
import { useState } from "react";
import Image from "next/image";
import { handleLogout } from "@/lib/actions";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  //TEMPORARY DATA
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
        {session ? (
          <>
            {session?.isAdmin && (
              <NavLink link={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button type="submit" className={styles.logout}>
                Logout
              </button>
            </form>
          </>
        ) : (
          <NavLink link={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        alt="menu button"
        width={24}
        height={24}
        className={styles.menu}
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className={styles.menulinks}>
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
