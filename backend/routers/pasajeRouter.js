import express from "express";
import expressAsyncHandler from "express-async-handler";
import Pasaje from "../models/pasajeModel.js";
import data from "../data.js";

const pasajeRouter = express.Router();

// !IMPORTANTE: DEBE HACERSE UN *GET* A ESTE ENDPOINT
// PARA POBLAR LA BASE DE DATOS, DE LO CONTRARIO
// NADA SERA RENDERIZADO YA QUE LA APP ES 100% DINAMICA
// Y DEPENDIENTE DE LA BASE DE DATOS.
pasajeRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const pasajes = data.pasajes.map((pasaje) => ({
      ...pasaje,
    }));
    const createdPasajes = await Pasaje.insertMany(pasajes);
    res.send({ createdPasajes });
    console.log(
      createdPasajes.length > 0
        ? "La base de datos se ha poblado con exito"
        : "Fracaso al intentar poblar la base de datos"
    );
  })
);

pasajeRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    // Lista de data recibida en los params del
    // GET de Axios en listPasajes
    const origin = req.query.origin || "";
    const destination = req.query.destination || "";
    const min =
      req.query.min && Number(req.query.min) !== ""
        ? Number(req.query.min)
        : undefined;
    const max =
      req.query.max && Number(req.query.max) !== ""
        ? Number(req.query.max)
        : undefined;
    const order = req.query.order || "";
    const originFilter = origin
      ? { origin: { $regex: origin, $options: "i" } }
      : {};
    const destinationFilter = destination
      ? { destination: { $regex: destination, $options: "i" } }
      : {};
    const priceFilter =
      min || max
        ? {
            price: {
              $gte: min ? min : 0,
              $lte: max ? max : Number.POSITIVE_INFINITY,
            },
          }
        : {};
    const sortOrder =
      order === "Más Barato"
        ? { price: 1 }
        : order === "Más Caro"
        ? { price: -1 }
        : { _id: -1 };

    const pasajes = await Pasaje.find({
      ...originFilter,
      ...destinationFilter,
      ...priceFilter,
    }).sort(sortOrder);
    res.send(pasajes);
    console.log("min&max", min, max);
  })
);

// Simple handler de POST para poder
// poblar la base de datos facilmente
// con Postman, en lugar de tener que
// crear cada documento manualmente
pasajeRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const pasaje = new Pasaje({
      origin: req.body.origin,
      destination: req.body.destination,
      price: req.body.price,
      availability: req.body.availability,
      date: req.body.date,
      numberDays: req.body.numberDays,
      // El campo imagen se define automaticamente
      // segun el destino espeficiado en el body
      // de la request
      image:
        req.body.destination === "Sao Paulo" ||
        req.body.destination === "sao paulo" ||
        req.body.destination === "Sao paulo" ||
        req.body.destination === "sao Paulo"
          ? "/images/sao-paulo.jpg"
          : req.body.destination === "Bariloche" ||
            req.body.destination === "bariloche"
          ? "/images/bariloche.jpg"
          : req.body.destination === "Córdoba" ||
            req.body.destination === "cordoba" ||
            req.body.destination === "córdoba" ||
            req.body.destination === "Cordoba"
          ? "/images/cordoba.jpg"
          : req.body.destination === "Salta" || req.body.destination === "salta"
          ? "/images/salta.jpg"
          : req.body.destination === "Rio de Janeiro" ||
            req.body.destination === "Río de Janeiro" ||
            req.body.destination === "rio de Janeiro" ||
            req.body.destination === "rio de janeiro" ||
            req.body.destination === "río de Janeiro"
          ? "/images/rio-janeiro.jpg"
          : req.body.destination === "Mendoza" ||
            req.body.destination === "mendoza"
          ? "/images/mendoza.jpg"
          : req.body.destination === "Tucumán" ||
            req.body.destination === "Tucuman" ||
            req.body.destination === "tucuman"
          ? "/images/tucuman.jpeg"
          : req.body.destination === "Jujuy" || req.body.destination === "jujuy"
          ? "/images/jujuy.jpg"
          : req.body.destination === "Asunción" ||
            req.body.destination === "asuncion"
          ? "/images/asuncion.jpg"
          : req.body.destination === "Corrientes" ||
            req.body.destination === "corrientes"
          ? "/images/corrientes.jpg"
          : req.body.destination === "Neuquén" ||
            req.body.destination === "neuquen"
          ? "/images/neuquen.jpg"
          : req.body.destination === "Buenos Aires" ||
            req.body.destination === "buenos aires"
          ? "/images/bsas.jpg"
          : // Tambien puede especificarse manualmente
          req.body.image
          ? req.body.image
          : "/images/pasaje.jpg",
    });
    console.log(pasaje);
    const createdPasaje = await pasaje.save();
    res.send({ message: "Pasaje creado", pasaje: createdPasaje });
  })
);

export default pasajeRouter;
