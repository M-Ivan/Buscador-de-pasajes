import mongoose from "mongoose";

// Model de documento simple
// siguiendo el ejemplo del challenge
const pasajeSchema = new mongoose.Schema(
  {
    origin: String,
    destination: String,
    price: Number,
    availability: Number,
    date: String,
    numberDays: Number,
    image: String,
  },
  { timestamps: true }
);

const Pasaje = mongoose.model("Pasaje", pasajeSchema);

export default Pasaje;
