let express = require('express');
let router = express.Router();

const librosController = require('../controllers/controllers.js');
router.post('/api/libros/create', librosController.create);
router.get('/api/libros/all', librosController.getAllLibros);
router.get('/api/libros/onebyid/:id', librosController.getLibroByID); // Asegúrate de que el nombre coincida
router.put('/api/libros/update/:id', librosController.updateById);
router.delete('/api/libros/delete/:id', librosController.deleteById);

module.exports = router;
