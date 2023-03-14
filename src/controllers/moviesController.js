const Movie = require("../models/movies")

exports.createMovie = async (req, res) => {

    try {
        let movie

        movie = new Movie(req.body);

        await movie.save()
        res.send(movie)

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo salió mal!!!')
    }
}

exports.getMovies = async (req, res) => {

    try {
        const movie = await Movies.find()
        res.json(movie)

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo salió mal!!!')
    }
}

exports.updateMovie = async (req, res) => {

    try {
        const { nombre, categoria, duracion, director, fecha_lanzamiento, descripcion} = req.body;
        let movie = await Movie.findById(req.params.id)

        if(!movie) {
            res.status(404).json({ msg: 'No existe la pelicula' })
        }

        movie.nombre = nombre
        movie.categoria = categoria
        movie.duracion = duracion
        movie.director = director
        movie.fecha_lanzamiento = fecha_lanzamiento
        movie.descripcion = descripcion

        movie = await Movie.findOneAndUpdate({ _id: req.params.id },movie, { new: true} )
        res.json(movie)

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo salió mal!!!')
    }
}


exports.getMovie = async (req, res) => {

    try {
        let movie = await Movie.findById(req.params.id)

        if(!movie) {
            res.status(404).json({ msg: 'No existe la pelicula' })
        }

        res.json(movie)

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo salió mal!!!')
    }
}

exports.deleteMovie = async (req, res) => {

    try {
        let movie = await Movie.findById(req.params.id)

        if(!movie) {
            res.status(404).json({ msg: 'No existe la pelicula' })
        }

        await Movie.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Pelicula eliminada con exito' })

    } catch (error) {
        console.log(error)
        res.status(500).send('Algo salió mal!!!')
    }
}