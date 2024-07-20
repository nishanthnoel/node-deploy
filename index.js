const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const cors = require("cors")
const morgan = require("morgan");
const path = require('path')
const env = require("dotenv").config()
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const server = express();
const productRouter = require("./Routes/productRouter");
const userRouter = require("./Routes/userRouter");
console.log("env", process.env.DB_PASSWORD);


// db connection code
main().catch((err) => console.log(err));

async function main() {
  // await mongoose.connect(process.env.MONGO_URL);
  await mongoose.connect(process.env.MONGO_URL);
  console.log("mongoose database connected");
}
 
// MIDDLEWARES

// server.use(morgan("dev"))  //morgan is a Node. js and Express middleware to log HTTP requests and errors, and simplifies the process
// server.use(morgan("default"))
server.use(cors());
// body parser
server.use(express.json()); // express does not use body unnecessarily. to use password in body we should use body parser
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use("/products", productRouter.router);
server.use("/users", userRouter.user);
server.use("*",(req,res)=>{
  res.sendFile(path.resolve( __dirname,  'build','index.html'))
})
//MVC MODEL- VIEW - CONTROLLER
// model - related to data and other stuff
// view - the template from front end and backend
// the logic between model and view

server.listen(process.env.PORT, () => {
  console.log("IM BATMAN!");
  console.log("Database connected")
});
