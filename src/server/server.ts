import express from 'express';

const server = express()

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use('/', (req, res) => {
    res.render('index',{
        content: "¡Bienvenido al concurso de nombres!",
    });
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
