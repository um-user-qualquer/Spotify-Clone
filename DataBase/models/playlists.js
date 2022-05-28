const Sequelize = require('sequelize')

const sequelize = require('../db')

const playlists = sequelize.define('playlists',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_play:{
        type: Sequelize.STRING,
        require:true,
    },
    codigo_play:{
        type: Sequelize.STRING,
        require:true,
    },
    id_usuario:{
        type: Sequelize.INTEGER,
        require:true
    },
    musicas:{
        type: Sequelize.JSON
    }
})

const init = async () =>{
    await playlists.sync()
}

init()

module.exports = playlists