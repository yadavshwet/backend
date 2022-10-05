require("dotenv").config();
const { ObjectID } = require("bson");
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://Shweta:ShwetaRaj@cluster0.m5vgc.mongodb.net/?retryWrites=true&w=majority";

// connection
async function mongoConnection(collectionName) {
  let mongoClient;
  try {
    mongoClient = new MongoClient(uri);
    console.log("Connecting to mongodb cluster");
    await mongoClient.connect();
    const db = mongoClient.db("Avaglobal");
    return db.collection(collectionName);
  } catch (error) {
    console.error("Connection with mongodb failed", error);
    process.exit();
  }
}

// Add item
async function addExpense(collection, reqBody) {
  return await collection.insertOne(reqBody);
}

// Find by item
async function findExpense(collection, name) {
  return await collection.find({}, {}).toArray();
}

// Update All
async function updateExpense(collection, id, updatedFields) {
  return await collection.updateOne(
    { _id: ObjectID(id) },
    { $set: updatedFields }
  );
}

// Delete All
async function deleteExpense(collection, id) {
  return await collection.deleteMany({ _id: ObjectID(id) });
}

module.exports = {
  addExpense,
  mongoConnection,
  findExpense,
  updateExpense,
  deleteExpense,
};
