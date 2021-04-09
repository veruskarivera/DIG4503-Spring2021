import Express from "express";
import Database from "./Database.js";
import { rmSync } from "fs";

const App = "Express";
const port = "45030";
App.use(Express.json());


//creating new database object
const db = new Database();
//Database.connect()
db.connect("lab11", "VeruskaRivera");

//PUT (App.put() )-> Database.createOne() -> collection.insertOne()
App.put("/books/:ISBN", (req, res) => {
  const isbn = req.params.isbn;

  //request body properties
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;

  res.json({
    title: title,
    author: author,
    description: description
  });
});

//GET (App.get() )-> Database.readOne() -> collection.findOne()
App.get("/books/:ISBN", (req, res) => {
  const isbn = req.params.isbn;
  res.json({ book: "not found" });
});

//POST  (App.post()) -> Database.readMany() -> collection.readMany()
App.post("/books/search");

//PATCH(App.patch() )-> Database.updateOne() -> collection.updateOne()
App.patch("/books/:ISBN", (req, res) => {
  const isbn= req.params.isbn;

  //request body properties
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const result = await db.updateOne(isbn, title);
  res.json(result);
});

//DELETE (App.delete() )-> Database.deleteOne() -> collection.deleteOne()
App.delete("/books/:ISBN", async (req, res) => {
  const isbn = req.params.isbn;
  const result = await db.deleteOne(isbn);
  res.json({result});
});

App.listen(port, () =>{
  console.log("Server running!");
});

