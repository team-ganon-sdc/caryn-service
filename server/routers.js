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
    Carousels.findOne(req.params.id, (err, result) => {
      if (err) {
        res.status(500).send('Internal server error');
        console.log('Internal server error', err)
        return;
      }
      console.log(`result ${result[0].images}`);
      console.log('is array:', Array.isArray(result));
      console.log('typeof result', typeof result)
      console.log('length result', result.length)
      res.json(result[0]);
      return;
    });
  });

module.exports = router;
