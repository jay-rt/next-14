import NavLink from "./navlink/NavLink";
import styles from "./links.module.css";

const Links = () => {
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

  //TEMPORARY DATA
  const session = true;
  const isAdmin = true;

  return (
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
  );
};

export default Links;
