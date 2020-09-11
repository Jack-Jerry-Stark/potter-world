const { Characters } = require('../models/');

const charactersListController = {

  characters: async (req, res) => {
    try {
      const characters = await Characters.findAll();
      
      res.render('characters', { characters });
    } catch (err) {
      console.trace(err);
      res.status(500).send(err);
    }
  }
};

module.exports = charactersListController;