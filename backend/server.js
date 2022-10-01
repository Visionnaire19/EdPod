const mongoose = require("mongoose");

const mongoConnectionURL =
"mongodb+srv://vchinoda:Zvavanyadza1979@cluster0.mjuzhb7.mongodb.net/?retryWrites=true&w=majority";

const databaseName = "EdPod";
const options = { useNewUrlParser: true, useUnifiedTopology: true, dbName: databaseName}

mongoose
   .connect(mongoConnectionURL, options)
   .then(() => console.log("Connected to MongoDB"))
   .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));
