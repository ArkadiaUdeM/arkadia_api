const mongoose = require('mongoose')
const Paquete = mongoose.model('Paquete')
const Proyecto = mongoose.model('Proyecto')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  Paquete.find(function(err, paquete) {
    utils.show(res, err, paquete)
  })
}

exports.create = function (req, res) {
  const { nombre, descripcion } = req.body
  const { proyectoId } = req.params
  const proyecto = new Proyecto({ _id: proyectoId })
  const paquete = new Paquete({
    nombre, 
    descripcion,
    proyecto,
  })

  paquete.save(function (err, paquete) {
    utils.show(res, err, paquete)
  })
}
