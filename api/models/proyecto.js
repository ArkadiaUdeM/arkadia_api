const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Proyecto = new Schema({
  nombre: String,
  descripcion: String,
}, { collection: 'sh_proyectos'})

Proyecto.virtual('url').get(function() {
  return '/proyecto/' + this._id
})

module.exports = mongoose.model('Proyecto', Proyecto)