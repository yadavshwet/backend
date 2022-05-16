var express = require("express");
var app = (module.exports = new express.Router());
const mongodb = require("./mongo-connection");

// Add Expense
app.post("/", (req, res) => {
  const mongClient = mongodb.mongoConnection();
  mongClient.then((client) => {
    const cc = mongodb.addExpense(client);
    cc.then((data) => {
      res.status(200);
      res.send('Expense added successfully');
    });
  });
});


// Get All Expenses
app.get("/", (req, res) => {
  const mongClient1 = mongodb.mongoConnection();
  mongClient1.then((client) => {
    const cc = mongodb.findExpense(client, "John");
    cc.then((data) => {
      res.send(data);
    });
  });
});


// update expense
app.put("/", (req, res) => {
  const mongClient1 = mongodb.mongoConnection();
  mongClient1.then((client) => {
    const cc = mongodb.updateExpense(client, "John", { item: "Tomato" });
    cc.then((data) => {
      res.send(data);
    });
  });
});


// Delete expense
app.delete("/", (req, res) => {
  const mongClient1 = mongodb.mongoConnection();
  mongClient1.then((client) => {
    const cc = mongodb.deleteExpense(client, "Tomato");
    cc.then((data) => {
      res.send(data)
    });
  });
});
