const {Requests} = require('../models/models')
const ApiError=require('../error/ApiError')

class RequestsController{
    async create(req,res, next){
       const {name, surname, lastname, adress, phone_num, comms} = req.body;
        const request = await Requests.create(req.body)
        return res.json(request)
    }
    async getAll(req,res){
        const requests = await Requests.findAll()
        return res.json(requests)
    }
    
}

module.exports = new RequestsController()