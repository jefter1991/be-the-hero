const express = require('express');  //importando pacote express
const routes = require('./routes');  //importando arquivo routes.js
const cors = require('cors');

const app = express();

app.use(cors()); //segurança da app
app.use(express.json());  //informando que as requisições da app serão em JSON
app.use(routes);  //usando rotas (Arquivo routs)
app.listen(3333); //dizendo que vai usar a porta 3333

/**
 * Rota :caminho completo onde estou indo
 * Recurso: que vem depois da / . Local onde estou acessando
 */
/**
 * Metodos HTTP:
 * 
 * GET: Buscar/Listar uma informação Back-end
 * POST:Criar uma informação no Back-end
 * PUT: Alterar uma informação no Back-end
 * DELETE: deletar uma informação no Back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: parâmetros nomeados enviados na rota após o "?" (Filtros/Paginação)
 * Route Params: parâmetros ultilizados 
 * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos
 */
/**
 * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL:  MongoDB, CouchDB, etc
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where(condiçao)
 */




