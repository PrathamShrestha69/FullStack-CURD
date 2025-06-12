import express from "express";
import dbconnect from "./dbconnection/dbconnect.js";
import bodyParser from "body-parser";
import userRoute from "./routes/user.route.js";
import cors from "cors";

const app = express();

//middleware
app.use(cors());

app.use(bodyParser.json());

app.use("/log", userRoute);

// app.use("/", (req, res) => {
//   res.send("working");
// });

app.listen(process.env.PORT, (req, res) => {
  dbconnect();
  console.log(
    `server is running on port = https://localhost:${process.env.PORT}`
  );
});
