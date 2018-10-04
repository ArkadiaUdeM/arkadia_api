const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OpcionSchema = new Schema({
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

})

OpcionSchema.virtual('url').get(function() {
  return '/opciones/' + this._id
})

module.exports = mongoose.model('Opcion', OpcionSchema)