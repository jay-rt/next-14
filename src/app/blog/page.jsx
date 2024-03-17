import Card from "@/components/card/Card";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

//LOADING DATA WITH AN API
// const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!res.ok) {
//     throw new Error("Error loading data");
//   }

//   return res.json();
// };

const BlogPage = async () => {
  //LOADING DATA WITH AN API
  // const posts = await getPosts();

  //LOADING DATA WITHOUT AN API
  const posts = await getPosts();

  return (
    <div className={styles.blogs}>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;
