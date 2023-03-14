const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/moviesController')

router.post('/createmovie', moviesController.createMovie)
router.get('/getmovies', moviesController.getMovies)
router.put('/:id', moviesController.updateMovie)
router.get('/:id', moviesController.getMovie)
router.delete('/:id', moviesController.deleteMovie)

module.exports = router