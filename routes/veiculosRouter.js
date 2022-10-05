const express = require("express");
const router = express.Router();
const VeiculosController = require("../controllers/veiculoController")

// Read - Pegando os veiculos ou pegando o veiculo por nome
router.get("/", VeiculosController.getAllVeiculos);

// Read - Pegando um veiculo por id
router.get("/:id", VeiculosController.getVeiculoById);

// Create - Criando um veiculo
router.post("/", VeiculosController.createVeiculo);

// Update - Atualizando um veiculo (total)
router.put("/:id", VeiculosController.updateVeiculo);

// Delete - excluindo um veiculo
router.delete("/:id", VeiculosController.removeVeiculo);


module.exports = router;