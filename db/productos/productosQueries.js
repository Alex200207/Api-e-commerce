import config from '../../config.js';

/**
 * Consulta para listar todos los productos
 */
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

/**
 * Consulta para listar un producto por su ID
 */
const listarProductoPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM producto WHERE id_producto = ? LIMIT 1', [id], (err, filas) => {
            if (err) {
                console.error('Error al obtener producto por ID:', err);
                reject(err);
            } else {
                resolve(filas[0]); // Retorna el primer elemento encontrado
            }
        });
    });
};

/**
 * Guardar un nuevo producto
 */
const crearProductoQuery = async (producto) => {
    const { nombre, id_producto, precio, descripcion, id_categoria, stock } = producto;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO producto (nombre, id_producto, precio, descripcion, id_categoria, stock) VALUES (?, ?, ?, ?, ?, ?)';
        config.query(sql, [nombre, id_producto, precio, descripcion, id_categoria, stock], (err, resultado) => {
            if (err) {
                console.error('Error al crear producto:', err);
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Actualizar un producto por su ID
 */
const actualizarProductoQuery = (id, producto) => {
    const { nombre, precio, descripcion, id_categoria, stock } = producto;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE producto SET nombre = ?, precio = ?, descripcion = ?, id_categoria = ?, stock = ? WHERE id_producto = ?';
        config.query(sql, [nombre, precio, descripcion, id_categoria, stock, id], (err, resultado) => {
            if (err) {
                console.error('Error al actualizar producto:', err);
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Eliminar un producto por su ID
 */
const eliminarProductoQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM producto WHERE id_producto = ?';
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

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosProductosQuery,
    listarProductoPorIdQuery,
    crearProductoQuery,
    actualizarProductoQuery,
    eliminarProductoQuery   
};
