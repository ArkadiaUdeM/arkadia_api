const express = require('express')

const projectRoutes = require('./projectRoutes')

const router = express.Router()

router.use('/api', projectRoutes)

module.exports = router