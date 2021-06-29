const express = require('express');

const OngsController = require('./controllers/OngsControllers');
const IncidentController = require('./controllers/IncidentController');
const ProfilleController = require('./controllers/ProfilleController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.get('/profille', ProfilleController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)


module.exports = routes;

