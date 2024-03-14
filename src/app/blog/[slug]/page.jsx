import Image from "next/image";
import styles from "./singleblog.module.css";

const SingleBlogPage = () => {
  return (
    <div className={styles.single}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/20367982/pexels-photo-20367982/free-photo-of-a-small-cabin-in-the-middle-of-a-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className={styles.img}
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/noavatar.png"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default SingleBlogPage;
