const { Schema, model } = require('mongoose')

const userSchema =  new Schema({
    email: String,
    nickname: String,
    password: String,
    rol: String,
},{
    timestamps: true
})

module.exports = model('User', userSchema)
