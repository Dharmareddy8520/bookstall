import mongoose from "mongoose";

const booksschema = mongoose.Schema({
  title: {
    type: "String",
    required: true,
  },
  author: {
    type: "string",
    required: true,
  },
  timestamp: {
    type: "string",
    required: true,
  },
  cost: {
    type: "number",
    required: true,
  },
});
const books = mongoose.model("Books", booksschema);

export { books };
