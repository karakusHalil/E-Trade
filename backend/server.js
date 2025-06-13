const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();

const port = 5000;

dotenv.config();

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

app.listen(port, () => {
  connect();
  console.log(`Sunucu ${port} üzerinden çalışıyor...`)
});
