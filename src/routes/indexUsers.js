const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')

router.post('/newuser', userController.createUser);
router.get('/getuser', userController.getUsers);
router.put('/:id', userController.updateUser);
router.get('/:id', userController.getUser);
router.delete('/:id', userController.deleteUser);

module.exports = router