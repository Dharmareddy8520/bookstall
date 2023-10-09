import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { Port, mongourl } from "./config.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/booksroutes.js";
import cores from "cors";

const app = express();
app.use(cores());
app.use(express.json());
app.get("/", (req, res) => {
  return res.status(200).send("hello world");
});

app.use("/books", router);

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log("server started at port" + Port);
    });
  })
  .catch((err) => console.log(err));
