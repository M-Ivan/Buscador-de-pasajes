// El server esta configurado como "modulo",
// y nodemon se corre con --experimental modules
// para poder permitir los import / exports de ES6
// ver ./package.json

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import pasajeRouter from "./routers/pasajeRouter.js";

// Permite agregar valores custom
// especificando las variables en
// un archivo .env
dotenv.config();

// Levantando el server express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conectando server a la DB
// via mongoose
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/challengeFlybondi",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

// Pasajes endpoint
app.use("/api/pasajes", pasajeRouter);
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// Puerto
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sirviendo en http://localhost:${port}`);
});
