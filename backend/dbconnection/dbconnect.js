import mongoose from "mongoose";

const dbconnect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("db connected sucessfuly");
  } catch (error) {
    console.log(error);
  }
};

export default dbconnect;
