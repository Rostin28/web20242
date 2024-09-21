const db = require('../config/db.config.js');
const usuarios = db.usuarios;

exports.obtenerUsuarioPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await usuarios.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    return res.status(200).json(usuario);
  } catch (error) {
    console.error('Error al obtener el usuario por ID:', error);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

exports.crearUsuario = async (req, res) => {
  try {
    const { id_usuario, nombre, apellido, email, telefono, direccion, fecha_registro, estado } = req.body;

    if (!id_usuario || !nombre || !apellido || !email || !telefono || !direccion || !fecha_registro || !estado) {
      return res.status(400).json({
        message: "Faltan campos requeridos",
      });
    }
    const nuevoUsuario = await usuarios.create({
      id_usuario,
      nombre,
      apellido,
      email,
      telefono,
      direccion,
      fecha_registro,
      estado,
    });

    return res.status(201).json({
      message: "Usuario creado exitosamente con el ID: " + nuevoUsuario.id_usuario,
      usuario: nuevoUsuario,
    });
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    return res.status(500).json({
      message: "Error interno del servidor",
      error: error.message,
    });
  }
};



exports.actualizarUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const [actualizado] = await usuarios.update(req.body, {
        where: { id_usuario: id },
      });
      if (!actualizado) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      return res.status(200).json({ mensaje: 'Usuario actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };

exports.eliminarUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const eliminado = await usuarios.destroy({ where: { id_usuario: id } });
      if (!eliminado) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      return res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };

exports.obtenerTodosLosUsuarios = async (req, res) => {
    try {
      const listaUsuarios = await usuarios.findAll();
      return res.status(200).json(listaUsuarios);
    } catch (error) {
      console.error('Error al obtener la lista de usuarios:', error);
      return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };
  


  