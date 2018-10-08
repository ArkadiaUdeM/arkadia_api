const mongoose = require('mongoose')
const Proyecto = mongoose.model('Proyecto')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  Proyecto.find(function(err, proyecto) {
    utils.show(res, err, proyecto)
  })
}

exports.findOne = function(req, res) {
  Proyecto.findById(req.params.proyectoId)
    .populate('paquete')
    .exec(function (err, proyecto) {
      utils.show(res, err, proyecto)
    })
}

exports.create = function(req, res) {
  const { nombre, descripcion } = req.body
  const proyecto = new Proyecto({ nombre, descripcion })

  proyecto.save(function(err, proyecto) {
    utils.show(res, err, proyecto)
  })
}