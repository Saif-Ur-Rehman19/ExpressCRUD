const express = require("express");

const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require('./middlewares/not-found');
const errorHandlerMiddleWare = require('./middlewares/error-handler');
require('dotenv').config();
// middleware

app.use(express.json());


//routes

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleWare);

const PORT = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log("Server is listening at port " + PORT));
  } catch (error) {
    console.log(error)
  }
};

start();

