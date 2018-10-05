const express = require('express')
const sistema = require('../controllers/sistemaController')

const router = express.Router()

router.get('/sistemas/:sistemaId', sistema.findOne)
router.get('/sistemas', sistema.findAll)
router.post('/sistemas', sistema.create)
router.post('/sistemas/:sistemaId/paquetes', sistema.addPackage)
router.post('/sistemas/:sistemaId/paquetes/:paqueteId/historiaDeUsuario', sistema.addHistoriadeUsuario)

module.exports = router