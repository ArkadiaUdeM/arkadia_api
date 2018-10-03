const mongoose = require('mongoose')
const Project = mongoose.model('Project')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  Project.find(function(err, project) {
    utils.show(res, err, project)
  })
}

exports.findOne = function(req, res) {
  Project.findById(req.params.projectId, function(err, project) {
    utils.show(res, err, project)
  })
}

exports.create = function(req, res) {
  const { name, description } = req.body
  const project = new Project({ name, description })

  project.save(function(err, project) {
    utils.show(res, err, project)
  })
}