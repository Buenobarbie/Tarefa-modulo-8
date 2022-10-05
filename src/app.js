const express = require('express');
const app = express();
const { PORT } = require("dotenv").config().parsed;

//Ativando Middlewares
app.use(express.json());

// Rotas
const productsRouter = require("../routes/veiculosRouter");
app.use("/veiculos", productsRouter);

app.listen(PORT, console.log(`Server running at port ${PORT}`));
