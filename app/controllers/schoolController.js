const { School } = require('../models');

const schoolController = {
    school: async (req, res) => {
        try {
          const school = await School.findOne({
            include: [
                { association: 'character' },
                { association: 'house' }
            ]
          });
          res.render('school', { school });
        } catch (err) {
          console.trace(err);
          res.status(500).send(err);
        }
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
// }
  };
  
  module.exports = schoolController;