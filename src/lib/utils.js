import mongoose from "mongoose";

//variable for tracking connection to the database
const connection = {};

const connectToDB = async () => {
  if (connection.isConnected) {
    console.log("Already connected to the database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export default connectToDB;
