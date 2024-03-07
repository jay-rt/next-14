"use client";

import NavLink from "./navlink/NavLink";
import styles from "./links.module.css";
import { useState } from "react";

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

const Links = () => {
  const [open, setOpen] = useState(false);

  //TEMPORARY DATA
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
            <button type="button" className={styles.logout}>
              Logout
            </button>
          </>
        ) : (
          <NavLink link={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        type="button"
        className={styles.menu}
        onClick={() => setOpen(!open)}
      >
        Menu
      </button>
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
