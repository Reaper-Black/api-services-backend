const User = require("../models/users");


exports.createUser = async (req, res) => {

    try {
        let user;

        // Creamos nuestro usuario
        user = new User(req.body);

        await user.save();
        res.send(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getUsers = async (req, res) => {

    try {
        const user = await User.find();
        res.json(user)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.updateUser = async (req, res) => {

    try {
        const { email, nickname, password, rol} = req.body;
        let user = await User.findById(req.params.id);

        if(!user) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }

        user.email = email
        user.nickname = nickname
        user.password = password
        user.rol = rol

        user = await User.findOneAndUpdate({ _id: req.params.id },user, { new: true} )
        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.getUser = async (req, res) => {

    try {
        let user = await User.findById(req.params.id);

        if(!user) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }

        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.deleteUser = async (req, res) => {

    try {
        let user = await User.findById(req.params.id);

        if(!user) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }

        await User.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Usuario eliminado con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}