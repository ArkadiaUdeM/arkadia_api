const mongoose = require('mongoose')
const Paquete = mongoose.model('Paquete')
const Proyecto = mongoose.model('Proyecto')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  Proyecto.findById(req.params.proyectoId)
    .populate('paquetes')
    .exec(function (err, proyecto) {
      utils.show(res, err, proyecto.paquetes)
    })
}

exports.findOne = function (req, res) {
  Paquete.findById(req.params.paqueteId)
    .populate('historiasDeUsuario')
    .exec(function (err, paquete) {
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
