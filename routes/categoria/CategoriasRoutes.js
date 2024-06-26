import { Router } from 'express';

import {
    listarCategorias,
} from '../../controllers/categoria/categoriasController.js'

const categoriasRouter = Router();

categoriasRouter.get('/', listarCategorias);

export default categoriasRouter;