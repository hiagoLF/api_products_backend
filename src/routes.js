const express = require('express')
const controller = require('./controllers/ProductController')

const routes = express.Router()

routes.get('/products', controller.index)
routes.post('/products', controller.store)
routes.post('/productsupdate', controller.update)
routes.get('/search/:titleProduct', controller.search)
routes.post('/delete', controller.delete)

module.exports = routes