const { Op } = require("sequelize");
const VeiculoModel = require("../models/veiculos");
console.log(VeiculoModel);

class VeiculosController{

    createVeiculo(req,res){
        const { ulid} = require("ulid");
        const data = { id: ulid(), ...req.body }
        console.log(data);
        VeiculoModel.create(data)
        .then(() => res.status(201).json({ msg : "Veiculo criado"}))
        .catch((err) => res.status(500).json({ msg : err }));
    }

    getAllVeiculos(req,res){
        const { nome } = req.query;

        const filter = nome
          ? {
              where: {
                nome: { [Op.iLike]: `%${nome}%`},
              },
            }
          : {};
    
        VeiculoModel.findAll(filter)
          .then((result) => res.status(200).json(result))
          .catch((err) => res.status(500).json({ error: err }));
    }

    getVeiculoById(req,res){
    VeiculoModel.findOne({ where: { id: req.params.id}})
    .then((result) => {
        if(!result) res.status(404).json({ error : "Veiculo não encontrado"})
        else  res.status(200).json(result)})
    .catch((err) => { res.status(404).json({ error : err})});

    }


    updateVeiculo(req,res){
        VeiculoModel.update(req.body, { where: { id: req.params.id}})
        .then(() => {res.status(200).json({msg : "Veiculo atualizado"})})
        .catch((err) => {res.status(500).json({ error : err})})

    }


    removeVeiculo(req,res){
        VeiculoModel.destroy({ where: { id: req.params.id}})
        .then((result) => {
            if(!result) res.status(404).json({ error : "Veiculo não encontrado"})
            else  res.status(200).json({ msg : "Veiculo excluído"})})
        .catch((err) => {res.status(500).json({ msg : err })});
    }
}


module.exports = new VeiculosController();