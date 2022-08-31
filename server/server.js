const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://nikita_101:nikki101@movieflix-db.g5407tr.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

  /*const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://nikita_101:nikki101@movieflix-db.g5407tr.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });*/

app.use("/api/user", userRoutes);

// heroku
app.use(express.static(path.join(movieflix, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(movieflix, 'build', 'index.html'));
});


app.listen(5000, () => {
  console.log("server started on port 5000");
});



