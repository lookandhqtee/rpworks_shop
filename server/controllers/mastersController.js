const {Masters, MasterInfo} = require('../models/models')
const ApiError=require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class MastersController{
    async create(req,res, next){
        try {
            const {master_name, master_surname, master_lastname, rank, employment_date} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const master = await Masters.create({master_name, master_surname, master_lastname, rank, employment_date, img : fileName})
            
            return res.json(master)
        } catch (e) {
            
            next(ApiError.badRequest(e.message))
        }
    }

    
    async getAll(req,res){

        let {master_name, page, limit} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page*limit - limit
        let masters;
        if (master_name)
        {
            masters = await Masters.findAndCountAll({where:{master_name}, limit, offset})
        }
        if (!master_name)
        {
            masters = await Masters.findAndCountAll({limit, offset})
        }
        return res.json(masters)
    }
    async getOne(req,res){
        const {id_master} = req.params
        const master = await Masters.findOne(
            {
                where: {id_master}
            },
        )
        return res.json(master)
    }
}

module.exports = new MastersController()