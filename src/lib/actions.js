"use server";

import Post from "@/models/Post";
import connectToDB from "./utils";
import { signIn, signOut } from "./auth";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("new post created");
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (formData) => {
  const id = formData.get("id");
  try {
    await Post.findByIdAndDelete(id);
    console.log("Successfully deleted the post");
  } catch (error) {
    console.log(error);
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};
