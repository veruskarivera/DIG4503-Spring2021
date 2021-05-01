import MongoClient from "mongodb";

const url =
  "mongodb+srv://VeruskaRivera:oBHRpd0a5OtFQqlA@cluster0.yuzwq.mongodb.net";

class Database {
  constructor() {
    this.connection = null;
    this.database = null;
    this.collection = null;
  }

  async connect() {
    this.connection = await MongoClient.connect(url, {
      useUnifiedTopology: true
    });
    this.database = this.connection.db("portfolio2");
    this.collection = this.database.collection("VeruskaRivera");
  }

  //PUT (App.put() )-> Database.createOne() -> collection.insertOne()
  async createOne(nid, firstName, lastName, major) {
    if (this.collection != null) {
      const result = await this.collection.insertOne({
        nid: nid,
        firstName: firstName,
        lastName: lastName,
        major: major
      });

      return {
        nid: nid,
        firstName: firstName,
        lastName: lastName,
        major: major
      };
    } else {
      return null;
    }
  }

  //GET (App.get() )-> Database.readOne() -> collection.findOne()
  async readOne(nid) {
    if (this.collection != null) {
      const result = await this.collection.findOne({
        nid: nid
      });

      return { result };
    } else {
      return { student: "not found" };
    }
  }

  //POST  (App.post()) -> Database.readMany() -> collection.readMany()
  async readMany(firstName, lastName) {
    if (this.collection != null) {
      const result = await this.collection.find({
        firstName: firstName,
        lastName: lastName
      });
    }
    return { student: result };
  }

  //PATCH(App.patch() )-> Database.updateOne() -> collection.updateOne()
  async updateOne(nid, firstName, lastName, major) {
    if (this.collection != null) {
      const result = await this.collection.updateOne(
        { nid: nid },
        { $set: { firstName: firstName, lastName: lastName, major: major } }
      );
      return { firstName: firstName, lastName: lastName, major: major };
    } else {
      return null;
    }
  }

  //DELETE (App.delete() )-> Database.deleteOne() -> collection.deleteOne()
  async deleteOne(nid) {
    if (this.collection != null) {
      const result = await this.collection.deleteOne({ nid: nid });
      return { deletedStudents: result.deletedCount };
    } else {
      return { deletedStudents: 0 };
    }
  }

  close() {
    if (this.collection != null) {
      this.collection.close();
    }
  }
}

export default Database;
