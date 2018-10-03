const db = require('./db/db')
const app = require('./app')

db.then(() => {
  console.log('Connected to mongo')
})

app.set('port', process.env.PORT || 3001)

const server = app.listen(app.get('port'), () => {
  console.log('\nStarts at:', server.address(), server.address().port)
})