const User = require("../models/users")

exports.crearUser = async (req, res) => {

    try {
        let user

        user = new User(req.body)

        await user.save()
        res.send(user)

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo salió mal!!!')
    }
}

exports.obtenerUser = async (req, res) => {

    try {
        const user = await User.find()
        res.json(user)

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo salió mal!!!')
    }
}

exports.actualizarUser = async (req, res) => {

    try {
        const { email, firstname, lastname, password, rol, date, age, address } = req.body
        let user = await User.findById(req.params.id)

        if(!user) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }

        user.email = email
        user.firstname = firstname
        user.lastname = lastname
        user.password = password
        user.rol = rol
        user.date = date
        user.age = age
        user.address = address

        user = await User.findOneAndUpdate({ _id: req.params.id },user, { new: true} )
        res.json(user)

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo salió mal!!!')
    }
}


exports.obtenerUser = async (req, res) => {

    try {
        let user = await User.findById(req.params.id)

        if(!user) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }

        res.json(user)

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo salió mal!!!')
    }
}

exports.eliminarUser = async (req, res) => {

    try {
        let user = await User.findById(req.params.id)

        if(!user) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }

        await User.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Usuario eliminado con exito' })

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo salió mal!!!')
    }
}