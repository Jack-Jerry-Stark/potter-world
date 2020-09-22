const dataMapper = require('../dataMapper');

const characterController = {
character: (req, res) => {
  // récupérer le personnage demandé par son id
  const id = parseInt(req.params.id, 1);
  // aller récupérer les infos du personnage demandé
  const myFunction = (error, result) => {
      // tester s'il y a une erreur
      if (error) {
          // envoyer une 500
          res.sendStatus(500);
      }
      // tester s'il y a aucun personnage de trouvé
      else if (result.rows.length < 1) {
          // envoyer une 404
          res.sendStatus(404);
      }
      // sinon
      else {
          // appeler la vue et lui passer les infos
          const character = result.rows[0];
          res.render('character', {
              character: character,
          });
      }
  };
  dataMapper.getCharacterById(id, myFunction);
}

  };
  
  module.exports = characterController;

