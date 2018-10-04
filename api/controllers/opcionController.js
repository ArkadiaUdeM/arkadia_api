const mongoose = require('mongoose')
const Opcion = mongoose.model('Opcion')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  Opcion.find(function(err, opcion) {
    utils.show(res, err, opcion)
  })
}

exports.addPackage = function(req, res) {
  const { descripcion, nombrePaquete, historiasDeUsuario } = req.body

  var objPaquete = { nombrePaquete, descripcion, historiasDeUsuario };

  Opcion.findOneAndUpdate(
    { _id: req.params.opcionId }, 
    { $push: { paquetes: objPaquete } },
    function (err, opcion) { utils.show(res, err, opcion) }
  );
}

exports.findOne = function(req, res) {
  Opcion.findById(req.params.opcionId, function(err, opcion) {
    utils.show(res, err, opcion)
  })
}

exports.create = function(req, res) {
  const { nombreSistema, descripcion, paquetes } = req.body
  const opcion = new Opcion({ nombreSistema, descripcion, paquetes })

  opcion.save(function(err, opcion) {
    utils.show(res, err, opcion)
  })
}