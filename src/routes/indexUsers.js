const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')

router.post('/createuser', userController.crearUser)
router.get('/getuser', userController.obtenerUser)
router.put('/:id', userController.actualizarUser)
router.get('/:id', userController.obtenerUser)
router.delete('/:id', userController.eliminarUser)

module.exports = router