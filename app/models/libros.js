module.exports = (sequelize, Sequelize) => {
	const libros = sequelize.define('libros', {
	  id_libro: {
		type: Sequelize.INTEGER,
		allowNull: false,
	  },
	  titulo: {
		type: Sequelize.STRING,
		allowNull: false,
	  },
	  id_autor: {
		type: Sequelize.STRING,
		allowNull: false,
	  },
	  isbn: {
		type: Sequelize.STRING,
		allowNull: false,
	  },
	  editorial: {
		type: Sequelize.STRING,
		allowNull: false,
	  },
	  anio_publicacion: {
		type: Sequelize.INTEGER,
		allowNull: false,
	  },
      categoria:{
      type: Sequelize.STRING,
      allowNull: false,
      }, 
      cantidad_disponible:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ubicacion:{
        type: Sequelize.STRING,
        allowNull: false
      }
	}, {
	  timestamps: false
	});
  
	return libros;
  };
  