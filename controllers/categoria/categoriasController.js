import {
    listarCategoriasQuery,
  } from "../../db/categorias/categoriasQueries";

const listarCategorias = async (req, res) => {

    try {

      const productos = await listarCategoriasQuery();
      res.json(productos);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  export {
    listarCategorias,

  };
  