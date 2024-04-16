import { addPost, deletePost } from "@/lib/actions";

const ServerActionTestPage = () => {
  //   const actionInComponent = async () => {
  //     "use server";
  //     console.log("it works");
  //   };

  return (
    <div>
      <form action={addPost}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="desc" placeholder="desc" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="text" name="userId" placeholder="userId" />
        <button type="submit">Create</button>
      </form>

      <form action={deletePost}>
        <input type="text" name="id" placeholder="id" />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
