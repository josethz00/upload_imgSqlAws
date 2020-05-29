const knex = require('../database/index');

module.exports = {

    async store(req, res, next){
        try{

            const { originalName: name, size, filename:key } = req.file
            await knex('pics').insert({
                name,
                size,
                key,
                url: '',
            });

            return res.status(201).send();

        }
        catch(error){
            next(error)
        }
    },
}