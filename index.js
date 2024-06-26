
import express from "express";
import cors from "cors";


import productosRouter from "./routes/productos/productosRoutes.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());


const port = 3000;

app.use("/productos", productosRouter);


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
