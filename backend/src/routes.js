const express = require('express')

const routes = express.Router()

routes.get('/', (request, response) => {
    return response.json({
        teste: 'teste',
    })
})

module.exports = routes
