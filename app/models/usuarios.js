module.exports = (sequelize, Sequelize) => {
	const usuarios = sequelize.define('usuarios', {
	  id_usuario: {
		type: Sequelize.INTEGER,
		allowNull: false,
	  },
	  nombre: {
		type: Sequelize.STRING,
		allowNull: false,
	  },
	  apellido: {
		type: Sequelize.STRING,
		allowNull: false,
	  },
	  email: {
		type: Sequelize.STRING,
		allowNull: false,
	  },
	  email: {
		type: Sequelize.STRING,
		allowNull: false,
	  },
	  telefono: {
		type: Sequelize.STRING,
		allowNull: false,
	  },
      direccion:{
      type: Sequelize.STRING,
      allowNull: false,
      }, 
      fecha_registro:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      estado:{
        type: Sequelize.STRING,
        allowNull: false
      }
	}, {
	  timestamps: false
	});
  
	return usuarios;
  };
  