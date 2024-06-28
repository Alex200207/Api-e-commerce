// productosquery.js

import config from '../../config.js';

// Consulta para listar todos los productos
const listarTodosProductosQuery = () => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM producto LIMIT 0, 10', (err, filas) => {
            if (err) {
                console.error('Error al listar productos:', err);
                reject(err);
            } else {
                resolve(filas);
            }
        });
    });
};

// Consulta para listar un producto por su ID
const listarProductoPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM producto WHERE ID_Producto= ? LIMIT 1', [id], (err, filas) => {
            if (err) {
                console.error('Error al obtener producto por ID:', err);
                reject(err);
            } else {
                resolve(filas[0]); // Retorna el primer elemento encontrado
            }
        });
    });
};

// Guardar un nuevo producto
const crearProductoQuery = async (producto) => {
    const { Nombre, Descripcion, Precio, ID_Categoria, Stock  } = producto;
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO producto (Nombre, Descripcion, Precio, ID_Categoria, Stock) VALUES (?, ?, ?, ?, ?)";
        config.query(sql, [Nombre, Descripcion, Precio, ID_Categoria, Stock], (err, resultado) => {
            if (err) {
                console.error('Error al crear producto:', err);
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};
// Actualizar un producto por su ID
const actualizarProductoQuery = (id, producto) => {
  const { Nombre, Descripcion, Precio, ID_Categoria, Stock } = producto; // Extraer variables del objeto producto
  // Validación de datos
  if (!Nombre || !Descripcion || !Precio || !ID_Categoria || !Stock) {
    throw new Error('Todos los campos son obligatorios');
  }
  return new Promise((resolve, reject) => {
      const sql = 'UPDATE producto SET Nombre = ?, Descripcion = ?, Precio = ?, ID_Categoria = ?, Stock = ? WHERE ID_Producto = ?';
      config.query(sql, [Nombre, Descripcion, Precio, ID_Categoria, Stock, id], (err, resultado) => {
          if (err) {
              console.error('Error al actualizar producto:', err);
              reject(err);
          } else {
              resolve(resultado);
          }
      });
  });
};

// Eliminar un producto por su ID
const eliminarProductoQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM producto WHERE ID_Producto = ?';
        config.query(sql, [id], (err, resultado) => {
            if (err) {
                console.error('Error al eliminar producto:', err);
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

export {
    listarTodosProductosQuery,
    listarProductoPorIdQuery,
    crearProductoQuery,
    actualizarProductoQuery,
    eliminarProductoQuery   
};
