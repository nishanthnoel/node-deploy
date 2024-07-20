const express = require("express");
// const server = express();  we should not declare two servers it becomes a problem
const productController = require("../Controller/Product");
const router = express.Router();


router
  .get("/", productController.getAllModel)
  .get("/:id", productController.getModel)
  .post("/", productController.createModel)
  .put("/:id", productController.replaceModel)
  .patch("/:id", productController.updateModel)
  .delete("/:id", productController.deleteModel);

  exports.router = router

  // cannot use this because the exports doesnt work for router like that in the following code
//   exports.router
//   .get("/products", productController.getAllProducts)
//   .get("/products/:id", productController.getProduct)
//   .post("/products", productController.createProduct)
//   .put("/products/:id", productController.replaceProduct)
//   .patch("/products/:id", productController.updateProduct)
//   .delete("/products/:id", productController.deleteProduct);
