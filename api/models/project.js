const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
  name: String,
  description: String,
})

ProjectSchema.virtual('url').get(function() {
  return '/project/' + this._id
})

module.exports = mongoose.model('Project', ProjectSchema)