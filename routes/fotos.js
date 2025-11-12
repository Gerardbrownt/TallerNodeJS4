var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Foto = require('../models').foto;

router.get('/findAll/json', function(req, res, next) {


  Foto.findAll({
    attributes: { exclude: ["updatedAt"] }
  })
  .then(fotos => {
    res.json(fotos);
  })
  .catch(error => res.status(400).send(error))

});


module.exports = router;