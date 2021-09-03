const express = require('express');

const { logger } = require('../logger');

module.exports.createRestRouter = (initialItems) => {

  let items = [ ...initialItems ];

  const RestRouter = express.Router();

  // Collection URL
  RestRouter.route("/")
    .get(async (req, res) => {
      res.json([ ...items ]);
    })
    .post(async (req, res) => {

      const newItem = {
        ...req.body,
        _id: Math.max(...items.map(c => c._id), 0) + 1,
      };

      items = [
        ...items,
        newItem,
      ];

      res.json(newItem);
    });

  // Element/Member URL
  RestRouter.route("/:id")
    .get(async (req, res) => {
      const item = items.find(i => i._id === parseInt(req.params.id, 10));

      if (item === null) {
        logger.error("unable to find it with id " + req.params.id);
        res.sendStatus(404);
      }

      res.json(item);
    })
    .put(async (req, res) => {

      const newItems = [...items];
      const itemIndex = items.findIndex(c => c._id === req.params.id);
      newItems[itemIndex] = {
        ...req.body,
      };

      items = newItems;

      res.sendStatus(204);

    })
    .delete(async (req, res) => {

      items = items.filter(c => c._id !== parseInt(req.params.id, 10));
      res.sendStatus(204);

    });

    return RestRouter;

};