const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

const connection = require('./database/connection');

routes.post('/sessions',SessionController.create);

routes.get('/ongs', OngController.index); //chamando a listagem de ongs
routes.post('/ongs', OngController.create);  //chamando a inserção da ong  que está no arquivo Ongcontroler

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;  //exportando as rotas para usar em outros arquivos