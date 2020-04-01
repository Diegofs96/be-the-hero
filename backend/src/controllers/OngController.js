const connection = require('../databases/connection');
const crypto = require('crypto');

module.exports = {


    //Listar ONGS
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    // Criar uma ONG nova
    async create (request, response){
        const {nome, email, whatsapp, cidade, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
    
        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            uf,
        })
    
        
        return response.json({
            id
        });
    }
};