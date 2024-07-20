const fs = require("fs");
const path = require("path")
// const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data.json"), "utf-8"));
const models = data.users;

exports.createModel = (req, res) => {
  console.log(req.body);
  models.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllModel = (req, res) => {
  res.json(models);
};

exports.getModel = (req, res) => {
  const id = +req.params.id; // (+sign converts dtring intonumber)
  const model = models.find((p) => p.id == id);

  res.json(model);
};

exports.replaceModel = (req, res) => {
  const id = +req.params.id;
  const modelIndex = models.findIndex((p) => p.id == id);
  models.splice(modelIndex, 1, { id: id, ...req.body });

  res.status(201).json();
};

exports.updateModel = (req, res) => {
  const id = +req.params.id;
  const modelIndex = models.findIndex((p) => p.id == id);
  const model = models[modelIndex];
  models.splice(modelIndex, 1, { ...model, ...req.body });

  res.status(201).json();
};

exports.deleteModel = (req, res) => {
  const id = +req.params.id;
  const modelIndex = models.findIndex((p) => p.id == id);
  models.splice(modelIndex, 1);

  res.status(201).json();
};
