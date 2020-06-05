const express = require('express');
const routes = express.Router();
const DevController = require('./Controllers/DevController');   

routes.get('/', (req, res) => {
    return res.json({message: `Olá ${req.query.name}`})
});

routes.post('/devs', DevController.store);

module.exports = routes;