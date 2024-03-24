import { Schema, models, model } from "mongoose";

//Defining Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 6,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    avatar: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

//Creating new model if it doesn't exist and exporting the model
const User = models.User || model("User", userSchema);
export default User;
