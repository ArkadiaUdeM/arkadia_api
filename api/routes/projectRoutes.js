const express = require('express')
const project = require('../controllers/projectController')

const router = express.Router()

router.get('/projects/:projectId', project.findOne)
router.get('/projects', project.findAll)
router.post('/projects', project.create)

module.exports = router