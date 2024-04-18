const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const collection = require("./mongo"); // Assuming this is your MongoDB collection
const dataModel = require("./mongo"); // Assuming this is your Mongoose data model

const app = express();
app.use(express.json());
app.use(cors());

// Since you're using express.json(), you don't need bodyParser.json() separately.
// Also, you don't need express.urlencoded() in this case.

app.post("/api/data/", async (req, res) => {
  const { msg } = req.body;
  console.log(msg);
  console.log(req.body);

  try {
    // Assuming `collection` is your MongoDB collection instance, you can use insertMany directly
    // await collection.insertMany([data]);
    // Or, if you're using Mongoose, you should use your dataModel to create a new document
    const user = await dataModel.create({
      dat: msg // Assuming you want to save `msg` in the 'dat' field
    });
    console.log(user);
    res.status(200).json({ message: "Data received successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
