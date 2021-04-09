import MongoClient from "mongodb";

const url =
  "mongodb+srv://VeruskaRivera:oBHRpd0a5OtFQqlA@cluster0.yuzwq.mongodb.net";

class Database {
  constructor() {
    this.connection = null;
    this.database = null;
    this.collection = null;
  }

  async connect(database, collection) {
    this.connection = await MongoClient.connect(url);
    this.database = this.connection.db(database);
    this.collection = this.database.collection(collection);
  }

  close() {}

  createOne() {}

  readOne() {}

  readMany() {}

  async updateOne(isbn, title, author, description) {
    if (this.collection != null) {
      const result = await this.collection.updateOne(
        { isbn: isbn },
        { $set: { title: title } }
      );
      return;
    } else {
      return null;
    }
  }

  async deleteOne(isbn) {
    if (this.collection != null) {
      const result = await this.collection.deleteOne({ isbn: isbn });
      return { books: result.deletedCount };
    } else {
      return { books: 0 };
    }
  }
}

export default Database;
