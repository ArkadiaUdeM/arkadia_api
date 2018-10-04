const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SistemaSchema = new Schema({
  nombreSistema: String,
  descripcion: String,
  paquetes: [
    {
      nombrePaquete: String,
      descripcion: String,
      historiasDeUsuario: [
        {
          nombreHistoria: String,
          referencia: String
        }
      ]
    }
  ]

}, { collection: 'sh_sistema' })

SistemaSchema.virtual('url').get(function() {
  return '/sistema/' + this._id
})

module.exports = mongoose.model('Sistema', SistemaSchema)