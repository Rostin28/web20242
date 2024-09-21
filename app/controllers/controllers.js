const db = require('../config/db.config.js');
const libros = db.libros;

exports.create = async (req, res) => {
  try {
    const { id_libro, titulo, id_autor, isbn, editorial, anio_publicacion, categoria, cantidad_disponible, ubicacion } = req.body;

    if (!id_libro || !titulo || !id_autor || !isbn || !editorial || !anio_publicacion || !categoria || !cantidad_disponible || !ubicacion) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const newLibro = { id_libro, titulo, id_autor, isbn, editorial, anio_publicacion, categoria, cantidad_disponible, ubicacion };
    const result = await libros.create(newLibro);

    res.status(201).json({
      message: "Exito libro creado con el id = " + result.id,
      libro: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error :c",
      error: error.message,
    });
  }
};

exports.getAllLibros = async (req, res) => {
  try {
    const allLibros = await libros.findAll();
    res.status(200).json({
      message: "Todos los libros obtenidos",
      libros: allLibros
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error!",
      error: error.message
    });
  }
};

exports.getLibroByID = async (req, res) => {
  try {
    const { Nombre_libro } = req.params;
    const libro = await libros.findOne({ where: { id_libro } });

    if (!libro) {
      return res.status(404).json({
        message: `No hay libro con el nombre = ${id_libro}`,
      });
    }

    res.status(200).json({
      message: "Libro encontrado = " + titulo,
      libro: libro
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error pa",
      error: error.message
    });
  }
};

exports.updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_libro, titulo, id_autor, isbn, editorial, anio_publicacion, categoria, cantidad_disponible, ubicacion } = req.body;

    const libro = await libros.findByPk(id);

    if (!libro) {
      return res.status(404).json({
        message: "Not Found for updating a libro with id = " + id,
        error: "404"
      });
    }

    const updatedLibro = { id_libro, titulo, id_autor, isbn, editorial, anio_publicacion, categoria, cantidad_disponible, ubicacion };
    await libros.update(updatedLibro, { where: { id } });

    res.status(200).json({
      message: "Update successfully a Libro with id = " + id,
      libro: updatedLibro,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error -> Cannot update a libro with id = " + req.params.id,
      error: error.message
    });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const libro = await libros.findByPk(id);

    if (!libro) {
      return res.status(404).json({
        message: "Does Not exist a Libro with id = " + id,
        error: "404",
      });
    }

    await libro.destroy();
    res.status(200).json({
      message: "Delete Successfully a Libro with id = " + id,
      libro: libro,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error -> Cannot delete a libro with id = " + req.params.id,
      error: error.message,
    });
  }
};
