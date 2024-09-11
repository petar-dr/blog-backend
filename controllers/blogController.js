const Blog = require("../models/blogModel");

exports.createBlog = async (req, res) => {
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

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      status: "Success",
      results: blogs.length,
      data: blogs,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json({
      status: "Succes",
      body: blog,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};
