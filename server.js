const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://pera91bb:u15bD718Cl61ts1v@blogdata.ra7xm.mongodb.net/",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then((con) => {
    console.log(con.connections);
    console.log("Mungoose is conected!");
  });

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server runing on port ${port}`);
});
