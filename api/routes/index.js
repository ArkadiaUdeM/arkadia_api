const express = require('express')

const proyectoRoutes = require('./proyectoRoutes')
const paqueteRoutes = require('./paqueteRoutes')
const historiaDeUsuarioRoutes = require('./historiaDeUsuarioRoutes')
const rolRoutes = require('./rolRoutes')

const router = express.Router()

router.use('/api', proyectoRoutes)
router.use('/api', paqueteRoutes)
router.use('/api', historiaDeUsuarioRoutes)
router.use('/api', rolRoutes)

module.exports = router
