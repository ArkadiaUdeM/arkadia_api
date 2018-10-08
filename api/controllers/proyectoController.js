const mongoose = require('mongoose')
const Proyecto = mongoose.model('Proyecto')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  Proyecto.find({}).populate({
    path: 'paquetes',
    select: 'nombre',
  })
  .exec(function (err, proyectos) {
    utils.show(res, err, proyectos)
  })
  
}

exports.findOne = function(req, res) {
  Proyecto.findById(req.params.proyectoId)
    .populate('paquetes')
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