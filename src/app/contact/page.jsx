// "use client";

import Image from "next/image";
import styles from "./contact.module.css";
// import dynamic from "next/dynamic";
// import { useState, useEffect } from "react";
// const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
//   ssr: false,
// });

export const metadata = {
  title: "Contact",
  description: "Contact description",
};

const ContactPage = () => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // const a = Math.random();
  // console.log(a);

  // console.log("let's see where it renders");

  return (
    <div className={styles.contact}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" className={styles.img} fill />
      </div>
      <div className={styles.formContainer}>
        {/* {isClient && a} */}
        {/* {<HydrationTestNoSSR />} */}
        {/* <div suppressHydrationWarning>{a}</div> */}
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
