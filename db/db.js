const mongoose = require('mongoose')
const keys = require('../config/keys')

mongoose.Promise = global.Promise

require('../api/models/project')

const db = mongoose.connect(keys.mongoURI)

module.exports = db