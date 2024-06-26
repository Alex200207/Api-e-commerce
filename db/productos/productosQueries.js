import config from '../../config.js';

const listarTodosProductosQuery = () => {

    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM producto LIMIT 0,10', (err, filas) => {

            if (err) {z
                console.log(err);
                reject(err);
            } else {

                resolve(filas);
            }
        });
    });
};

export {
    listarTodosProductosQuery, 
}
