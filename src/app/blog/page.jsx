import Card from "@/components/card/Card";
import styles from "./blog.module.css";

const BlogPage = () => {
  return (
    <div className={styles.blogs}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default BlogPage;
