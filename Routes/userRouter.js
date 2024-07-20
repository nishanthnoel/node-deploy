const express = require("express");
// const server = express();  we should not declare two servers it becomes a problem
const userController = require("../Controller/user");
const user = express.Router();


user
  .get("/", userController.getAllModel)
  .get("/:id", userController.getModel)
  .post("/", userController.createModel)
  .put("/:id", userController.replaceModel)
  .patch("/:id", userController.updateModel)
  .delete("/:id", userController.deleteModel);

  exports.user = user