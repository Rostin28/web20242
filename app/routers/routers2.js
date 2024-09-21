let express = require('express');
let routers2 = express.Router();

const usuariosController = require('../controllers/controllerusuario.js'); 

routers2.post('/api/usuarios', usuariosController.crearUsuario);
routers2.get('/api/usuarios', usuariosController.obtenerTodosLosUsuarios);
routers2.get('/api/usuarios/:id', usuariosController.obtenerUsuarioPorId);
routers2.put('/api/usuarios/:id', usuariosController.actualizarUsuario);
routers2.delete('/api/usuarios/:id', usuariosController.eliminarUsuario);

module.exports = routers2;
