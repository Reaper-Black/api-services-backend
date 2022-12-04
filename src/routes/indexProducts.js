const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productsController');

router.post('/createproduct', productoController.crearProducto);
router.get('/getproducts', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;