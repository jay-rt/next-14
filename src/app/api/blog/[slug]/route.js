import connectToDB from "@/lib/utils";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    connectToDB();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return NextResponse.error(error);
  }
};

export const DELETE = async (req, { params }) => {
  const { slug } = params;
  try {
    connectToDB();
    await Post.findOneAndDelete({ slug });
    console.log("Post successfully deleted");
  } catch (error) {
    console.log(error);
    return NextResponse.error(error);
  }
};
