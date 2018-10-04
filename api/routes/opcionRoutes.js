const express = require('express')
const opcion = require('../controllers/opcionController')

const router = express.Router()

router.get('/opciones/:opcionId', opcion.findOne)
router.get('/opciones', opcion.findAll)
router.post('/opciones', opcion.create)
router.post('/opciones/:opcionId/paquetes', opcion.addPackage)

module.exports = router