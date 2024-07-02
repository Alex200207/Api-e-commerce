
import express from "express";
import cors from "cors";
import productosRouter from "./routes/productos/productosRoutes.js";
import categoriasRouter from "./routes/categorias/categoriasRoutes.js";
import usuariosRouter from "./routes/Usuarios/usuariosRoutes.js";




const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());


const port = 3000;

app.use("/productos", productosRouter);
app.use("/categorias", categoriasRouter);
app.use("/usuarios", usuariosRouter);


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
