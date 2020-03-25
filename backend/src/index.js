const express = require('express')
const routes = require('./routes')

const APP_PORT = 3333
const app = express()

app.use(routes)

app.listen(APP_PORT)
