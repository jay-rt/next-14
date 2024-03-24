import { Schema, models, model } from "mongoose";

//Defining Schema
const postSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

//Creating new model if it doesn't exist and exporting the model
const Post = models.Post || model("Post", postSchema);
export default Post;
