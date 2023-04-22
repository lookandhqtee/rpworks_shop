const {Repairing_works} = require('../models/models')
const ApiError=require('../error/ApiError')

class Repairing_worksController{
    async create(req,res){
        const {id_device, id_master, SNL_of_master, repairing_start_date, breaking_type, repairing_price} = req.body
        const rep_work = await Repairing_works.create(req.body)
        return res.json(rep_work)
    }
    async getAll(req,res){
        const rep_works = await Repairing_works.findAll()
        return res.json(rep_works)
    }
}

module.exports = new Repairing_worksController()