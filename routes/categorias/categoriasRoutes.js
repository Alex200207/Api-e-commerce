import { Router } from 'express';
import {
    listarTodasCategorias,

} from '../../controllers/categorias/categoriaController.js';

const categoriasRouter = Router();

// Ruta para obtener todos los productos
categoriasRouter.get('/', listarTodasCategorias);


export default categoriasRouter;
