const express = require("express");
// const mongoose = require("mongoose");

// const blogRouter = require("./routes/blogRoutes");
const userRouter = require("./routes/userRoutes");

//CREATE SERVER
const app = express();

//MIDLEWARE
app.use(express.json());

//ROUTE MOUNTING
app.use("/api/v1/users", userRouter);
// app.use("api/v1/blogs", blogRouter);

//START SERVER
const port = 3000;

app.listen(port, () => {
  console.log(`Server runing on port ${port}`);
});
