const mongoose = require('mongoose')
const HistoriaDeUsuario = mongoose.model('HistoriaDeUsuario')
const Paquete = mongoose.model('Paquete')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  HistoriaDeUsuario.find(function(err, historiaDeUsuario) {
    utils.show(res, err, historiaDeUsuario)
  })
}

exports.create = function (req, res) {
  const { nombre, descripcion } = req.body
  const { paqueteId } = req.params
  const paquete = new Paquete({ _id: paqueteId })
  const historiaDeUsuario = new HistoriaDeUsuario({
    nombre, 
    descripcion,
    paquete,
  })

  historiaDeUsuario.save(function (err, historiaDeUsuario) {
    utils.show(res, err, historiaDeUsuario)
  })
}