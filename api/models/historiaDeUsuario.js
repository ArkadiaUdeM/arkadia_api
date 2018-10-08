const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const HistoriaDeUsuario = new Schema({
  nombre: String,
  descripcion: String,
  paquete: {
    type: ObjectId,
    ref: 'Paquete',
    required: true,
  },
}, { collection: 'sh_historiasDeUsuario'})

HistoriaDeUsuario.virtual('url').get(function() {
  return '/paquetes/' + this._id
})

module.exports = mongoose.model('HistoriaDeUsuario', HistoriaDeUsuario)