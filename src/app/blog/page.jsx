import Card from "@/components/card/Card";
import styles from "./blog.module.css";
// import { getPosts } from "@/lib/data";

//LOADING DATA WITH AN API
const getPosts = async () => {
  const res = await fetch("http://localhost:3000/api/blog");
  if (!res.ok) {
    throw new Error("Error loading data");
  }

  return res.json();
};

const BlogPage = async () => {
  //LOADING DATA WITH AN API
  const posts = await getPosts();

  //LOADING DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.blogs}>
      {posts.map((post) => (
        <Card key={post._id} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;
