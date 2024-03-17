import { getAuthor } from "@/lib/data";
import styles from "./postauthor.module.css";

//LOADING DATA WITH AN API
// const getAuthor = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Error loading author");
//   }

//   return res.json();
// };

const PostAuthor = async ({ id }) => {
  //LOADING DATA WITH AN API
  // const author = await getAuthor(id);

  //LOADING DATA WITHOUT AN API
  const author = await getAuthor(id);
  return (
    <div className={styles.author}>
      <span className={styles.title}>Author</span>
      <span className={styles.name}>{author.name}</span>
    </div>
  );
};

export default PostAuthor;
