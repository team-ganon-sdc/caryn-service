// var express = require('express');
// var controllers = require('../../database/controllers/controllers.js');
// var router = express.Router();


// router.get('/apps/:id/images/', ctrl.photos.index);


// router.use(function(req, res, next) {
//   res.status(404).send('not found');
// });

// router.use(function(err, req, res, next) {
//   console.error(err);
//   res.status(500).send('BAD');
// });

// module.exports = router;


// //get random id
// router.route('/:id')
//   .get(function (req, res) {
//     controllers.getRandomApp().then(data => {
//       res.json(data);
//     }).catch(err => {
//       res.status(500).send('Internal server error');
//     });
//   });

// // search for specific id
//   router.route('/:id')
//   .get(function (req, res) {
//     controllers.getApp(req.params.id, (err, result) => {
//       if (err) {
//         res.status(500).send('Internal server error');
//         return;
//       }
//       res.json(result);
//       return;
//     });
//   });