const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const port = 5000;

app.use(express.json());
app.use(cors());
