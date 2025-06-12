const express = required("express");
const cors = required("cors");
const mongoose = required("mongoose");

const app = express();

const port = 5000;

app.use(express.json());
app.use(cors());
