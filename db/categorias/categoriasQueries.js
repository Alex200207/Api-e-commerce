

import config from '../../config.js';

// Consulta para listar todos las actegorias
const listarTodasCategoriasQuery = () => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM categoria LIMIT 0, 10', (err, filas) => {
            if (err) {
                console.error('Error al listar las categorias:', err);
                reject(err);
            } else {
                resolve(filas);
            }
        });
    });
};

export {
    listarTodasCategoriasQuery,

};
