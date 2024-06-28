import {
  listarTodosProductosQuery,
  listarProductoPorIdQuery,
  crearProductoQuery,
  actualizarProductoQuery,
  eliminarProductoQuery
} from "../../db/productos/productosQueries.js";

/**
* Controlador para listar todos los productos
*/
const listarTodosProductos = async (req, res) => {
  try {
      const productos = await listarTodosProductosQuery();
      res.json(productos);
  } catch (error) {
      console.error('Error al listar todos los productos:', error);
      res.status(500).send('Error interno del servidor');
  }
};

/**
* Controlador para obtener un producto por su ID
*/
const obtenerProductoPorId = async (req, res) => {
  const { id } = req.params;
  try {
      const producto = await listarProductoPorIdQuery(id);
      if (!producto) {
          res.status(404).send('Producto no encontrado');
      } else {
          res.json(producto);
      }
  } catch (error) {
      console.error('Error al obtener producto por ID:', error);
      res.status(500).send('Error interno del servidor');
  }
};

/**
* Controlador para crear un nuevo producto
*/
const crearProducto = async (req, res) => {
  const producto = req.body;
  try {
      const resultado = await crearProductoQuery(producto);
      res.status(201).send('Producto creado correctamente');
  } catch (error) {
      console.error('Error al crear producto:', error);
      res.status(500).send('Error interno del servidor');
  }
};

/**
* Controlador para actualizar un producto por su ID
*/
const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const producto = req.body;
  try {
    await actualizarProductoQuery(id, producto);
    res.json({ message: 'Producto actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

/**
* Controlador para eliminar un producto por su ID
*/
const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  try {
      const resultado = await eliminarProductoQuery(id);
      res.send('Producto eliminado correctamente');
  } catch (error) {
      console.error('Error al eliminar producto:', error);
      res.status(500).send('Error interno del servidor');
  }
};

export {
  listarTodosProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};
