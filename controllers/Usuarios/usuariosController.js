import {
    listarUsuariosQuery
  } from "../../db/Usuarios/usuariosQueries.js";
  

  const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await listarUsuariosQuery();
        res.json(usuarios);
    } catch (error) {
        console.error('Error al listar todos los usuarios:', error);
        res.status(500).send('Error interno del servidor');
    }
  };
  

  
  export {
    listarUsuarios,

  };
  