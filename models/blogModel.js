const mongoose = require("mongoose");

const blogShema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Title is require!"],
    unique: true,
  },
  text: {
    type: String,
    require: [true, "Text is require!"],
  },
  creator: {
    type: String,
    require: [true, "Creator is require!"],
  },
  tags: [],
});

const Blog = mongoose.model("Blog", blogShema);

module.exports = Blog;
