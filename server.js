const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//Esse body-parser vai servir para coletarmos os dados do banco de dados
const bodyParser = require('body-parser')

const app = express()
app.use(express.json())

//Configurando body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors())

mongoose.connect(
    'mongodb://localhost:27017/apieapp', {useNewUrlParser: true, useUnifiedTopology: true}
)

require('./src/models/MainProduct')

app.use('/', require('./src/routes'))

app.listen(3001)