import { getUser } from "@/lib/data";
import styles from "./postauthor.module.css";
import Image from "next/image";

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
  const author = await getUser(id);

  return (
    <div className={styles.author}>
      <Image
        src={author.avatar ? author.avatar : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
        className={styles.avatar}
      />
      <div className={styles.authorDesc}>
        <span className={styles.title}>Author</span>
        <span className={styles.name}>{author.username}</span>
      </div>
    </div>
  );
};

export default PostAuthor;
