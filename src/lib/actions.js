"use server";

import Post from "@/models/Post";
import connectToDB from "./utils";
import { signIn, signOut } from "./auth";
import User from "@/models/User";
import bcrypt from "bcryptjs";

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

export const register = async (formData) => {
  console.log(formData);
  const { username, email, password, retypePassword } =
    Object.fromEntries(formData);

  if (password !== retypePassword) {
    return "Password is incorrect";
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    connectToDB();
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return "User already exists";
    }

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    console.log("New user registered");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
