const connect = require('../database/connection');

module.exports = {

  async index(request, response){
      const {page = 1} = request.query;

      const [count] = await connect('incidents').count(); // colchete na variavel significa pegar somente 1 ao inves de array

      const inscidents = await connect('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1)*5)
      .select(["incidents.*", 
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf']);
      response.header('X-Total-Count', count['count(*)']);  //armazenar o header da resposta X-Total-count com o numero de registros
      return response.json(inscidents);
  },

  async create (request, response){
      const {title, description, value} = request.body; //tras valores passados pelo metodo POST
      const ong_id = request.headers.authorization;
      
      const [id] = await connect('incidents').insert({
        title,
        description,
        value,
        ong_id
      });

      return  response.json({ id });
  },

  async delete(request, response){
      const { id } = request.params;
      const ong_id = request.headers.authorization;

      const incident = await  connect('incidents')
      .where('id', id)
      .select('ong_id')
      .first();                     //fazendo um select pra buscar o id da ong que está deletando

      if(incident.ong_id != ong_id){  //verifica se a ong que está logada tem o mesmo ID que esta deletando 
        return response.status(401).json({error:'Operação não permitida.' });
      }

      await connect('incidents').where('id',id).delete();

      return response.status(204).send();
  }
}