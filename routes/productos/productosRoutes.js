import { Router } from 'express';

import {
    listarTodosProductos,
} from '../../controllers/productos/productosController.js';

const productosRouter = Router();

productosRouter.get('/', listarTodosProductos);

export default productosRouter;