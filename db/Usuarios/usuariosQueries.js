

import config from '../../config.js';


const listarUsuariosQuery = () => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM usuario LIMIT 0, 10', (err, filas) => {
            if (err) {
                console.error('Error al listar los usuarios:', err);
                reject(err);
            } else {
                resolve(filas);
            }
        });
    });
};

export {
    listarUsuariosQuery,

};
