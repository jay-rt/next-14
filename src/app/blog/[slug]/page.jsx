import Image from "next/image";
import styles from "./singleblog.module.css";
import PostAuthor from "@/components/author/PostAuthor";
import { Suspense } from "react";
// import { getPost } from "@/lib/data";

// LOADING DATA WITH AN API
const getPost = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Error loading post");
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SingleBlogPage = async ({ params }) => {
  const { slug } = params;
  //LOADING DATA FROM AN API
  const post = await getPost(slug);

  //LOADING DATA WITHOUT AN API
  // const post = await getPost(slug);
  return (
    <div className={styles.single}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" className={styles.img} fill />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            {/** Typecasting the userId to string using toHexString method */}
            {/* <PostAuthor id={post.userId.toHexString()} /> */}
            <PostAuthor id={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.slice(0, 10)}
            </span>
          </div>
        </div>
        <p className={styles.desc}>{post.desc}</p>
      </div>
    </div>
  );
};

export default SingleBlogPage;
