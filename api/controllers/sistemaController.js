const mongoose = require('mongoose')
const Sistema = mongoose.model('Sistema')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  Sistema.find(function(err, sistema) {
    utils.show(res, err, sistema)
  })
}

exports.addPackage = function(req, res) {
  const { descripcion, nombrePaquete, historiasDeUsuario } = req.body

  var objPaquete = { nombrePaquete, descripcion, historiasDeUsuario };

  Sistema.findOneAndUpdate(
    { _id: req.params.sistemaId }, 
    { $push: { paquetes: objPaquete } },
    function (err, sistema) {
      utils.show(res, err, sistema)
    }
  );
}

exports.findOne = function(req, res) {
  Sistema.findById(req.params.sistemaId, function(err, sistema) {
    utils.show(res, err, sistema)
  })
}

exports.create = function(req, res) {
  const { nombreSistema, descripcion, paquetes } = req.body
  const sistema = new Sistema({ nombreSistema, descripcion, paquetes })

  sistema.save(function(err, sistema) {
    utils.show(res, err, sistema)
  })
}