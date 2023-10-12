import mongoose, { mongo } from "mongoose";

async function conectarNaDataBase() {
  mongoose.connect(
    "mongodb+srv://admin:admin123@cluster0.mklu30z.mongodb.net/livraria?retryWrites=true&w=majority"
  );
  return mongoose.connection;
}

export default conectarNaDataBase;