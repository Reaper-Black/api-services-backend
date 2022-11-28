const { Schema, model } = require('mongoose');

const userSchema =  new Schema({
    email: String,
    firstname: String,
    lastname: String,
    password: String,
    rol: String
},{
    timestamps: true
});

module.exports = model('User', userSchema);
