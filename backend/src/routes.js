const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();

// Controller de login
routes.post('/login', LoginController.create);

// Controllers de ONGS
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);


// Controllers de Incidents
routes.get('/incidents', IncidentController.listar);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// Controllers de Profile
routes.get('/profile', ProfileController.index);

module.exports = routes;