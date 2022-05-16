require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const uri = process.env.DB_URI;

// connection
async function mongoConnection() {
  let mongoClient;
  try {
    mongoClient = new MongoClient(uri);
    console.log("Connecting to mongodb cluster");
    await mongoClient.connect();
    const db = mongoClient.db("Expenses");
    return db.collection("expenseDetail");
  } catch (error) {
    console.error("Connection with mongodb failed", error);
    process.exit();
  }
}

// Add item
async function addExpense(collection) {
  const studentDocument = {
    item: "John Smith",
    cost: 21,
  };

  await collection.insertOne(studentDocument);
}

// Find by item
async function findExpense(collection, name) {
  await collection.find({ item: name }).toArray();
}

// Update All
async function updateExpense(collection, name, updatedFields) {
  await collection.updateMany({ item: name }, { $set: updatedFields });
}

// Delete All
async function deleteExpense(collection, name) {
  await collection.deleteMany({ item: name }, { $mod: { item: name } });
}

module.exports = {
  addExpense,
  mongoConnection,
  findExpense,
  updateExpense,
  deleteExpense,
};
