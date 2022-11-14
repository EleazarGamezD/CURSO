const User = {
  get: (req, res) => {
    res.status (200).send ('Este es un Cochinito ');
  },

  list: (req, res) => {
    res.status (200).send ('Hola Cochinito!');
  },

  create: (req, res) => {
    res.status (201).send ('Creando al  Cochinito!');
  },
  update: (req, res) => {
    res.status (204).send ('Actualizando al Cochinito!');
  },

  destroy: (req, res) => {
    res.status (204).send ('eliminando un cochinto!');
  },
};

module.exports = User;
