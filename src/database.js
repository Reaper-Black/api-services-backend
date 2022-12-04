const mongoose = require('mongoose')

require('dotenv').config({ path: 'conection.env' })

const conectarDB = async () => {

    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to database')

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = conectarDB

/*mongoose.connect('mongodb://localhost/apiservices', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Connected to database'))
    .catch(err => console.log(err));*/

