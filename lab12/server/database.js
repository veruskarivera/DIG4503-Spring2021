import MongoClient from "mongodb";

const url =
  "mongodb+srv://VeruskaRivera:oBHRpd0a5OtFQqlA@cluster0.yuzwq.mongodb.net";

class Database {
  constructor() {
    this.connection = null;
    this.database = null;
    this.collection = null;
  }

  async connect(lab11, books) {
    this.connection = await MongoClient.connect(url, {
      useUnifiedTopology: true
    });
    this.database = this.connection.db(lab11);
    this.collection = this.database.collection(books);
  }

  //PUT (App.put() )-> Database.createOne() -> collection.insertOne()
  async createOne(ISBN, title, author, description) {
    if (this.collection != null) {
      const result = await this.collection.insertOne({
        ISBN: ISBN,
        title: title,
        author: author,
        description: description
      });

      return {
        ISBN: ISBN,
        title: title,
        author: author,
        description: description
      };
    } else {
      return null;
    }
  }

  //GET (App.get() )-> Database.readOne() -> collection.findOne()
  async readOne(ISBN) {
    if (this.collection != null) {
      const result = await this.collection.findOne({
        ISBN: ISBN
      });

      return { result };
    } else {
      return { book: "not found" };
      //not returning what i want, but kinda works
    }
  }

  //POST  (App.post()) -> Database.readMany() -> collection.readMany()
  async readMany(title, author) {
    if (this.collection != null) {
      const result = await this.collection.find({
        title: title,
        author: author
      });
    }
    //returns an empty paramater, idk why tried everything. also disconnects me from server?
    return { book: result };
  }

  //PATCH(App.patch() )-> Database.updateOne() -> collection.updateOne()
  async updateOne(ISBN, title, author, description) {
    if (this.collection != null) {
      const result = await this.collection.updateOne(
        { ISBN: ISBN },
        { $set: { title: title, author: author, description: description } }
      );
      return { title: title, author: author, description: description };
    } else {
      return null;
    }
  }

  //DELETE (App.delete() )-> Database.deleteOne() -> collection.deleteOne()
  async deleteOne(ISBN) {
    if (this.collection != null) {
      const result = await this.collection.deleteOne({ ISBN: ISBN });
      return { books: result.deletedCount };
    } else {
      return { books: 0 };
    }
  }

  close() {
    if (this.collection != null) {
      this.collection.close();
    }
  }
}

export default Database;
