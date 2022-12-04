const { Schema, model } = require('mongoose')

const userSchema =  new Schema({
    email: String,
    firstname: String,
    lastname: String,
    password: String,
    rol: String,
    date: String,
    age: Number,
    address: String
},{
    timestamps: true
})

module.exports = model('User', userSchema)
