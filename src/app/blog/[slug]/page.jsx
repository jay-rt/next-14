import Image from "next/image";
import styles from "./singleblog.module.css";
import PostAuthor from "@/components/author/PostAuthor";
import { Suspense } from "react";

const getPost = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Error loading post");
  }

  return res.json();
};

// const SingleBlogPage = ({ params, searchParams }) => {
// console.log(params);
// console.log(searchParams);
const SingleBlogPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
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
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="/noavatar.png"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostAuthor id={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <p className={styles.desc}>{post.body}</p>
      </div>
    </div>
  );
};

export default SingleBlogPage;
