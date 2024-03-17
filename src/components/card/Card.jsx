import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ post }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/20367982/pexels-photo-20367982/free-photo-of-a-small-cabin-in-the-middle-of-a-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className={styles.img}
            fill
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
