const express = require('express')
const conectarDB = require('./database')
const cors = require("cors")

const app = express()

conectarDB()
app.use(cors())

app.use(express.json())

app.use('/apiservices', require('./routes/index'))
app.use('/apiservices/usuarios', require('./routes/indexUsers'))
app.use('/apiservices/products', require('./routes/indexProducts'))

app.get("/", (req, res) => {
    res.status(200).send("Hola API-Servicios Backend")
})

app.listen(3000, () => {
    console.log('Listening on', 3000)

})

/*const express =  require('express');
const app =  express();
const cors =  require('cors')

require('./database');

app.use(cors())
app.use(express.json());

app.use('/apiservices',require('./routes/index'));
app.use('/apiservices/products',require('./routes/indexProducts'));

app.listen(3000);
console.log('Listening on', 3000);*/