const express = require("express");

const app = express();

const PORT = 3000;

const MESSAGE = process.env.MESSAGE || "Hola, soy Jesús y esta es mi API";


app.get("/", (req, res) => {

    res.json({
        mensaje: MESSAGE
    });

});


app.listen(PORT, () => {

    console.log(`API ejecutándose en el puerto ${PORT}`);

});