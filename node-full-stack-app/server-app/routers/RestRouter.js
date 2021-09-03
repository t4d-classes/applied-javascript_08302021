const express = require('express');
const { ObjectID } = require('mongodb');

const { logger } = require('../logger');

module.exports.createRestRouter = (Model) => {

  const RestRouter = express.Router();

  // Collection URL
  RestRouter.route("/")
    .get(async (req, res) => {
     
      try {
        const resources = await Model.find(null, null, { skip: 0, limit: 1000 });
        res.json(resources);
      } catch (err) {
        logger.error(err);
        res.sendStatus(500);
      }

    })
    .post(async (req, res) => {

      try {

        const newResource = new Model(req.body);
        const savedResource = await newResource.save();

        res.json(savedResource);

      } catch(err) {
        logger.error(err);
        res.sendStatus(500);        
      }

    });

  // Element/Member URL
  RestRouter.route("/:id")
    .get()
    .put()
    .delete();

};