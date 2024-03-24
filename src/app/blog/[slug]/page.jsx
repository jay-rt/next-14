import Image from "next/image";
import styles from "./singleblog.module.css";
import PostAuthor from "@/components/author/PostAuthor";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

//LOADING DATA WITH AN API
// const getPost = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error("Error loading post");
//   }

//   return res.json();
// };

const SingleBlogPage = async ({ params }) => {
  const { slug } = params;
  //LOADING DATA FROM AN API
  // const post = await getPost(slug);

  //LOADING DATA WITHOUT AN API
  const post = await getPost(slug);
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
            <PostAuthor id={post.userId.toHexString()} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <p className={styles.desc}>{post.desc}</p>
      </div>
    </div>
  );
};

export default SingleBlogPage;
