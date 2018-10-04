const express = require('express')

const projectRoutes = require('./projectRoutes')
const opcionRoutes = require('./opcionRoutes')

const router = express.Router()

router.use('/api', projectRoutes)
router.use('/api', opcionRoutes)

module.exports = router