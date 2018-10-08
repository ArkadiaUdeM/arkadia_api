const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Proyecto = new Schema({
  nombre: String,
  descripcion: String,
}, { 
  collection: 'sh_proyectos', 
  toJSON: { virtuals: true }
})

Proyecto.virtual('paquetes', {
  ref: 'Paquete',
  localField: '_id',
  foreignField: 'proyecto'
})

module.exports = mongoose.model('Proyecto', Proyecto)