const express = require("express");
const mongoose = require("mongoose");

// MONGOOSE CONNECTION
mongoose
  .connect(
    "mongodb+srv://pera91bb:u15bD718Cl61ts1v@blogdata.ra7xm.mongodb.net/blogsColections?retryWrites=true&w=majority&appName=blogData/"
  )
  .then((con) => {
    // console.log(con.connections);
    console.log("Mungoose is conected!");
  });

const blogRouter = require("./routes/blogRoutes");
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
