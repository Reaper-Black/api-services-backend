const { Schema, model } = require('mongoose');

const productsSchema = new Schema({
    nombre: String,
    categoria: String,
    ubicacion: String,
    precio: Number
}, {
    timestamps: true
});

module.exports = model('Product', productsSchema);