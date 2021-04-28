import CORS from "cors";
import Express from "express";
import Database from "./Database.js";

const App = Express();
const port = 45030;

App.use(CORS());
App.use(Express.json());

const db = new Database();

db.connect("lab11", "books");

//PUT (App.put() )-> Database.createOne() -> collection.insertOne()
App.put("/books/:ISBN", async (req, res) => {
  const ISBN = req.params.ISBN;
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  let result = await db.createOne(ISBN, title, author, description);
  res.json(result);
});

//GET (App.get() )-> Database.readOne() -> collection.findOne()
App.get("/books/:ISBN", async (req, res) => {
  const ISBN = req.params.ISBN;
  const result = await db.readOne(ISBN);
  res.json(result);
});

//POST  (App.post()) -> Database.readMany() -> collection.readMany()
App.post("/books/search", (req, res) => {
  const title = req.query.title;
  const author = req.query.author;
  const result = db.readMany(title, author);
  res.json(result);
});

//PATCH(App.patch() )-> Database.updateOne() -> collection.updateOne()
App.patch("/books/:ISBN", async (req, res) => {
  const ISBN = req.params.ISBN;
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const result = await db.updateOne(ISBN, title, author, description);
  res.json(result);
});

//DELETE (App.delete() )-> Database.deleteOne() -> collection.deleteOne()
App.delete("/books/:ISBN", async (req, res) => {
  const ISBN = req.params.ISBN;
  const result = await db.deleteOne(ISBN);
  res.json(result);
});

db.close();

App.listen(port, () => {
  console.log("Server is running!");
});
