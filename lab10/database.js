// 2. connect() method should use the "lab10" database and "people" collection.
// 3. createOne() method should use insertOne() to create a document with the fields firstName, lastName, and favoriteColor passed to it. It should also return an object with these same properties.
// 4. readOne() method should use findOne() to return a found document or {person: "not found"}.
// 5. close() should close the database connection
import MongoClient from "mongodb";

const url =
  "mongodb+srv://VeruskaRivera:oBHRpd0a5OtFQqlA@cluster0.yuzwq.mongodb.net";

export default class Database {
  constructor() {
    this.connection = null;
    this.database = null;
    this.collection = null;
  }
//connect
  async connect() {
    this.connection = await MongoClient.connect(url, {
      useUnifiedTopology: true
    });
    this.database = this.connection.db("lab10");
    this.collection = this.database.collection("People");
  }

//add
  async createOne() {
    if (this.collection != null) {
      let results = await this.collection.insertOne({
        firstName: "Veruska",
        lastName: "Rivera",
        favoriteColor: "black"
      });
      return results;
    }
  }
//search
  async readOne() {
    if (this.collection != null) {
      let results = await this.collection.findOne({
        firstName: " ",
        lastName: " ",
        favoriteColor: " "
      });
      return results;
    }
  }

  close() {
    if (this.collection != null) {
      this.collection.close();
    }
  }
}
