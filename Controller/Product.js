const fs = require("fs");
const model = require("../Model/product.js")
const mongoose = require("mongoose")
const Product = model.Product;
// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8")); // not requires in mongooose
// const models = data.products; //not requires in mongoose

exports.createModel = (req, res) => {
  //   const product = new Product();
  //   product.title = "PhoneX"
  //   product.price = 99999;
  //   product.rating = 5;
  //   product.save().then((err, doc) => {
  //     console.log({err, doc})
  //     res.status(201).json(doc);
  // })

  // CREATE
  const product = new Product(req.body); // req.body because we are sending the new object from the body of postman
   // this new product is done is called making instatce because we are creating a new one
  product.save().then((err, doc) => {
    // console.log({ err, doc })
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(doc);
    }
  })
};

//READ
exports.getAllModel = async(req, res) => {
  const products = await Product.find()
  res.json(products);
};

exports.getModel = async(req, res) => {
  const id = req.params.id;   //+req.params.id;
  const product = await Product.findById(id)
  res.json(product);
}; 

//UPDATE
//Put
exports.replaceModel = async(req, res) => {
  const id = req.params.id;
  try{
      const doc = await Product.findOneAndReplace({_id:id}, req.body, {new:true}) //({filter}, replacement, {displlay new ele/ old ele})
      res.status(201).json(doc);  // default it returns the old document, with new option it returns new one
    }
    catch(err){
      console.log(err)
      res.status(400).json(err);
    }
};

//Patch
exports.updateModel = async(req, res) => {
  const id = req.params.id;
  try{
      const doc = await Product.findOneAndUpdate({_id:id}, req.body, {new:true}) //({filter}, replacement, {displlay new ele/ old ele})
      res.status(201).json(doc);
    }
    catch(err){
      console.log(err)
      res.status(400).json(err);
    }
};

//DELETE
exports.deleteModel = async (req, res) => {
  const id = req.params.id;
  try{
      const doc = await Product.findOneAndDelete({_id:id}) //({filter}, replacement, {displlay new ele/ old ele})
      res.status(201).json(doc);
    }
    catch(err){
      console.log(err)
      res.status(400).json(err);
    }
};
