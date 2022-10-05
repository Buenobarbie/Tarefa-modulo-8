// npx sequelize-cli model:generate --name User --attributes id:string,nome:string,ano:string,cor:string --force

const sequelize = require('../infra/dbSequelize');
const { DataTypes } = require('sequelize');
const veiculoModel = sequelize.define("veiculoModel", 
{
    id: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    cor: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 0
    }
},{
    tableName: "Veiculos",
    schema: "public"
});

module.exports = veiculoModel;