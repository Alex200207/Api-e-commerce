import { createConnection } from 'mysql2';


const config = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'alex2002',
    database: 'e-comersedb',
    insecureAuth: true,
    port: 3307
});


config.connect(function (err) {
    if (err) {
        console.error('Error de conexión: ' + err.stack);
        return;
    }
    console.log('Conexión exitosa con el id ' + config.threadId);
})


export default config;