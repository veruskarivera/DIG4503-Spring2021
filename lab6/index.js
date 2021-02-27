import Express from "express";

const App = Express();
const object = {
  name: "Veruska",
  color: "Black"
};
const port = 45030;
App.get("/", function(req, res) {
  res.send("Hello World");
});

App.get("/person", function(req, res) {
  res.json(object);
});

App.listen(port, function() {
  console.log("it's working!");
});
