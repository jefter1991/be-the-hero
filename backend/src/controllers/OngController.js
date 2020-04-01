/**
 * O async com await embaixo quer dizer que não vai terminar de carregar enquanto não finalizar
 * o metodo do await.
 */
const crypto = require('crypto');
const connection = require('../database/connection');  //traz o arquivo de conexçao

module.exports = {
  async index (request, response) { //rota que lista ongs
    const ongs = await connection('ongs').select('*');
    
    return response.json(ongs);
  },

  async create(request, response){       //Cadastra ongs
    const {name, email, whatsapp, city, uf} = request.body;
  
    const id = crypto.randomBytes(4).toString('HEX');
  
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    });
    
    return response.json({ id });
  }
}