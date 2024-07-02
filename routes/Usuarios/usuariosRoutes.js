import { Router } from 'express';
import {
    listarUsuarios,

} from '../../controllers/Usuarios/usuariosController.js';

const usuariosRouter = Router();

// Ruta para obtener todos los productos
usuariosRouter.get('/', listarUsuarios);


export default usuariosRouter;
