const express = require('express')

const proyectoRoutes = require('./proyectoRoutes')
const paqueteRoutes = require('./paqueteRoutes')
const historiaDeUsuarioRoutes = require('./historiaDeUsuarioRoutes')

const router = express.Router()

router.use('/api', proyectoRoutes)
router.use('/api', paqueteRoutes)
router.use('/api', historiaDeUsuarioRoutes)

module.exports = router