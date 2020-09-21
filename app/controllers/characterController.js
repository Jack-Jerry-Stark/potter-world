//const { Character } = require('../models');

// const characterController = {
//     character: async (req, res) => {
//         try {
//           const character = await Character.findOne(
//             `async: true`
//           );
//           res.render('character', { character });
//         } catch (err) {
//           console.trace(err);
//           res.status(500).send(err);
//         }
//       }
const dataMapper = require('../dataMapper');

const characterController = {
character: (req, res) => {
  // récupérer le personnage demandé par son id
  const id = parseInt(req.params.id, 10);
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
// school: (req, res) => {
//   // récupérer les données dont on a besoin
//   dataMapper.getTypes((error, result) => {
//       if (error) {
//           console.trace(error);
//           res.sendStatus(500);
//       }
//       else {
//           // appeler la vue et lui passer
//           res.render('school', {
//               school: result.rows,
//           });
//       }
//   });
// },
// choose: (req, res) => {
//   // je peux récupérer le numéro du personnage
//   const id = parseInt(req.params.id, 10);
//   // je demande à datamapper les infos du personnage
//   dataMapper.getCharacterById(id, (error, result) => {
//       if (error) {
//           // envoyer une 500
//           res.sendStatus(500);
//       }
//       // tester s'il y a aucun personnage de trouvé
//       else if (result.rows.length < 1) {
//           // envoyer une 404
//           res.sendStatus(404);
//       }
//       // sinon
//       else {
//           // appeler la vue et lui passer les infos
//           const pokemon = result.rows[0];
//           // je veux remplir ma session avec le personnage choisi
//           req.session.starter = ('character.fistname'+' '+'character.lastname'); 
//           // je veux revenir à l'accueil
//           res.redirect('/');
//       }
//   });
// },
// restart: (req, res) => {
//   delete req.session.starter;
//   res.redirect('/');
// }
  };
  
  module.exports = characterController;

//   const mainController = {
//     homePage: (request, response) => {
//         response.render('home');
//     },
  
//     notFound: (req, res) => {
//         res.render('404');
//     }
  
//   };

