import {
    listarTodosProductosQuery,
  } from "../../db/productos/productosQueries.js";

const listarTodosProductos = async (req, res) => {

    try {

      const productos = await listarTodosProductosQuery();
      res.json(productos);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  export {
    listarTodosProductos,

  };
  