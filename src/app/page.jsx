import Image from "next/image";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <button type="button" className={styles.button}>
            Learn More
          </button>
          <button type="button" className={styles.button}>
            Contact
          </button>
        </div>
        <div className={styles.brand}>
          <Image src="/brands.png" alt="" fill />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill unoptimized />
      </div>
    </div>
  );
};

export default HomePage;
