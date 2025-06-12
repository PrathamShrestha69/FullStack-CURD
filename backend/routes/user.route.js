import express from "express";
import {
  create,
  deleteUser,
  getUser,
  getUserById,
  update,
} from "../controllers/user.contoller.js";

const userRoute = express.Router();

userRoute.post("/user", create);
userRoute.get("/getuser", getUser);
userRoute.get("/user/:id", getUserById);
userRoute.put("/update/user/:id", update);
userRoute.delete("/delete/user/:id", deleteUser);

export default userRoute;
