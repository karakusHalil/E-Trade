const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mainRoute = require("./routes");

const app = express();

const port = 5100;


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDb bağlantısı başarılı...");
  } catch (error) {
    throw new Error(error);
  }
};

app.use(express.json());
app.use(cors());
app.use("/api", mainRoute);

app.listen(port, () => {
  connect();
  console.log(`Sunucu ${port} üzerinden çalışıyor...`);
});
