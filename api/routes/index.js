const express = require('express')

const projectRoutes = require('./projectRoutes')
const sistemaRoutes = require('./sistemaRoutes')

const router = express.Router()

router.use('/api', projectRoutes)
router.use('/api', sistemaRoutes)

module.exports = router