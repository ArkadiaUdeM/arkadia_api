const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const HistoriaDeUsuario = new Schema(
  {
    nombre: String,
    paquete: {
      type: ObjectId,
      ref: 'Paquete',
      required: true,
    },
  },
  { collection: 'sh_historiasDeUsuario' },
)

module.exports = mongoose.model('HistoriaDeUsuario', HistoriaDeUsuario)
