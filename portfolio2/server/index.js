import CORS from "cors";
import Express from "express";
import Database from "./Database.js";

const App = Express();
const port = 45031;

App.use(CORS());
App.use(Express.json());

const db = new Database();

db.connect();

//PUT (App.put() )-> Database.createOne() -> collection.insertOne()
App.put("/VeruskaRivera/:nid", async (req, res) => {
  const nid = req.params.nid;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const major = req.body.major;
  let result = await db.createOne(nid, firstName, lastName, major);
  res.json(result);
});

//GET (App.get() )-> Database.readOne() -> collection.findOne()
App.get("/VeruskaRivera/:nid", async (req, res) => {
  const nid = req.params.nid;
  const result = await db.readOne(nid);
  res.json(result);
});

//POST  (App.post()) -> Database.readMany() -> collection.readMany()
App.post("/VeruskaRivera/search", (req, res) => {
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  const result = db.readMany(firstName, lastName);
  res.json(result);
});

//PATCH(App.patch() )-> Database.updateOne() -> collection.updateOne()
App.patch("/VeruskaRivera/:nid", async (req, res) => {
  const nid = req.params.nid;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const major = req.body.major;
  const result = await db.updateOne(nid, firstName, lastName, major);
  res.json(result);
});

//DELETE (App.delete() )-> Database.deleteOne() -> collection.deleteOne()
App.delete("/VeruskaRivera/:nid", async (req, res) => {
  const nid = req.params.nid;
  const result = await db.deleteOne(nid);
  res.json(result);
});

db.close();

App.listen(port, () => {
  console.log("Server is running!");
});
