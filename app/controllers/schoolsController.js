const { Schools } = require('../models/');

const schoolsController = {

  characters: async (req, res) => {
    try {
      const schools = await School.findAll({
        association: "character",
        include: ['name'],
        order : [
          ['position', 'ASC'],
          ['character', 'id', 'ASC']
      ]
      });
      
      res.render('schools', { schools });
    } catch (err) {
      console.trace(err);
      res.status(500).send(err);
    }
  }

};


module.exports = schoolsController;