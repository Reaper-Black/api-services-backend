const Producto = require("../models/products")

exports.crearProducto = async (req, res) => {

    try {
        let producto

        producto = new Producto(req.body);

        await producto.save()
        res.send(producto)

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo salió mal!!!')
    }
}

exports.obtenerProductos = async (req, res) => {

    try {
        const productos = await Producto.find()
        res.json(productos)

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo salió mal!!!')
    }
}

exports.actualizarProducto = async (req, res) => {

    try {
        const { nombre, categoria, ubicacion, precio, peso, dimensiones, material } = req.body;
        let producto = await Producto.findById(req.params.id)

        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        producto.nombre = nombre
        producto.categoria = categoria
        producto.ubicacion = ubicacion
        producto.precio = precio
        producto.peso = peso
        producto.dimensiones = dimensiones
        producto.material = material

        producto = await Producto.findOneAndUpdate({ _id: req.params.id },producto, { new: true} )
        res.json(producto)

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo salió mal!!!')
    }
}


exports.obtenerProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id)

        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        res.json(producto)

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo salió mal!!!')
    }
}

exports.eliminarProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id)

        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        await Producto.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado con exito' })

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo salió mal!!!')
    }
}