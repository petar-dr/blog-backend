const Blog = require("../models/blogModel");

exports.addBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);

    res.status(201).json({
      status: "Success",
      data: newBlog,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};
