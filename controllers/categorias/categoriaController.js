import {
    listarTodasCategoriasQuery
  } from "../../db/categorias/categoriasQueries.js";
  

  const listarTodasCategorias = async (req, res) => {
    try {
        const categorias = await listarTodasCategoriasQuery();
        res.json(categorias);
    } catch (error) {
        console.error('Error al listar todas las categorias:', error);
        res.status(500).send('Error interno del servidor');
    }
  };
  

  
  export {
    listarTodasCategorias,

  };
  