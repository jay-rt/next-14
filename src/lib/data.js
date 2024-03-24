import Post from "@/models/Post";
import connectToDB from "./utils";
import User from "@/models/User";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

export const getPosts = async () => {
  await connectToDB();
  try {
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (slug) => {
  await connectToDB();
  try {
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  await connectToDB();
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id) => {
  noStore(); //use no store function to prevent the caching
  await connectToDB();
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
  }
};
