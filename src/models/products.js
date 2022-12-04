const { Schema, model } = require('mongoose');

const productsSchema = new Schema({
    nombre: String,
    categoria: String,
    ubicacion: String,
    precio: Number,
    peso: String,
    dimensiones: String,
    material: String
}, {
    timestamps: true
});

module.exports = model('Product', productsSchema);