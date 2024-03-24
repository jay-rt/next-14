import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ post }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={
              post.img
                ? post.img
                : "https://images.pexels.com/photos/20367982/pexels-photo-20367982/free-photo-of-a-small-cabin-in-the-middle-of-a-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt=""
            className={styles.img}
            fill
          />
        </div>
        <span className={styles.date}>
          {post.createdAt.toLocaleDateString()}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
