var express = require('express');
var Carousels = require('../database/model.js');
var router = express.Router();

// router.route('/:id')
//   .get(function (req, res) {
//     Carousels.getApps(1).then(data => {
//       res.json(data);
//     }).catch(err => {
//       res.status(500).send('Internal server error');
//     });
//   });

  router.route('/:id')
  .get(function (req, res) {
    Carousels.findOne(1, (err, result) => {
      if (err) {
        res.status(500).send('Internal server error');
        console.log('Internal server error', err)
        return;
      }
      res.send(result);
      return;
    });
  });

module.exports = router;
