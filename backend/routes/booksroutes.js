import express from "express";
const router = express.Router();
import { books } from "../models/books.js";

//request books from database
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.timestamp ||
      !req.body.cost
    ) {
      return res.status(400).send("all fields are required");
    }
    {
      const science = {
        title: req.body.title,
        author: req.body.author,
        cost: req.body.cost,
        timestamp: req.body.timestamp,
      };
      const newbook = await books.create(science);
      return res.status(200).send(newbook);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
router.get("/", async (req, res) => {
  try {
    const science = await books.find({});
    res.json({
      count: science.length,
      books: science,
    });
  } catch {
    console.log(error);
    res.status(500).console.log(error);
  }
});

//request books by id
router.get("/:id", async (req, res) => {
  try {
    const science = await books.findById(req.params.id);
    res.json(science);
  } catch (error) {
    console.log(error);
    res.status(500).console.log(error);
  }
});

//update books by id

router.patch("/:id", async (req, res) => {
  try {
    const i = req.params.id;
    const u = await books.findByIdAndUpdate(i, req.body, {
      new: true,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//detete books
router.delete("/:id", async (req, res) => {
  try {
    const i = req.params.id;
    const d = await books.findByIdAndDelete(i);
    if (!d) {
      res.status(404).send("book not found");
    }
    res.send("books successfully deleted");
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
