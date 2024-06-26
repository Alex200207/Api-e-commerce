import config from '../../config.js';

const listarCategoriasQuery = () => {

    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM categoria LIMIT 0,10', (err, filas) => {

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
    listarCategoriasQuery, 
}
