const mongoose = require("mongoose");

// MONGOOSE CONNECTION
mongoose
  .connect(
    "mongodb+srv://pera91bb:u15bD718Cl61ts1v@blogdata.ra7xm.mongodb.net/usersData?retryWrites=true&w=majority&appName=blogData/"
  )
  .then((con) => {
    // console.log(con.connections);
    console.log("Mungoose is conected!");
  });

const userShema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Username is require"],
    unique: true,
  },
  password: {
    type: {
      type: String,
      require: [true, "Password is require"],
    },
  },
});

const User = mongoose.model("User", userShema);

module.exports = User;
