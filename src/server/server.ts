import express from 'express';
import os from 'node:os';
import config from './config';

const server = express()

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use('/', (req, res) => {
    res.render('index',{
        content: "¡Bienvenido al concurso de <em>nombres</em>!",
    });
});

const PORT = config.port || 3000;

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`,
        `\nEntorno: ${config.env}`,
        `\nNombre de la aplicación: ${config.appName}`,
        `\nHostname: ${os.hostname()}`,
    );
});
