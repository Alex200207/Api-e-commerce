import { Router } from 'express';
import {
    listarTodosProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} from '../../controllers/productos/productosController.js';

const productosRouter = Router();

// Ruta para obtener todos los productos
productosRouter.get('/', listarTodosProductos);

// Ruta para obtener un producto por su ID
productosRouter.get('/:id', obtenerProductoPorId);

// Ruta para crear un nuevo producto
productosRouter.post('/', crearProducto);

// Ruta para actualizar un producto por su ID
productosRouter.put('/:id', actualizarProducto);

// Ruta para eliminar un producto por su ID
productosRouter.delete('/:id', eliminarProducto);

export default productosRouter;
