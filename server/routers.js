

// router.route('/:id')
//   .get(function (req, res) {
//     Carousels.getApps(1).then(data => {
//       res.json(data);
//     }).catch(err => {
//       res.status(500).send('Internal server error');
//     });
//   });

// router.route('/:id')
//   .get(function (req, res) {
//     Carousels.findOne(req.params.id)
//     .then(data => {
//       res.json(data);
//     })
//     .catch(err => {
//       res.status(500).send('Internal server error');
//       done();
//     })
//     });



// router.route('/:id')
//   app.get(function (req, res) {
//     Carousels.find(req.params.id, (err, result) => {
//       if (err) {
//         res.status(500).send('Internal server error');
//         console.log('Internal server error', err)

//       }
//       res.json(result[0]);
//       done();
//     });
//   });


  // const index = function (req, res, next) {
  //   const appId = req.params.id;
  //   Carousels.findOne({id: appId})
  //   .exec()
  //   .then(function(images) {
  //     if (!images || !images.length) {
  //       return next();
  //     }
  //     res.json({results: images})
  //   })
  //   .catch(next)
  // };

  // router.get('/carousels/:id', index)

  // router.use(function(req, res, next) {
  //   res.status(404).send('not found');
  // });

  // router.use(function(err, req, res, next) {
  //   console.error(err);
  //   res.status(500).send('BAD');
  // });

// module.exports = router;
