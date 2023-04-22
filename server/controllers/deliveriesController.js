const {Deliveries} = require('../models/models')
const ApiError=require('../error/ApiError')

class DeliveriesController{
    async create(req,res, next){
        try {
            const {company, adress} = req.body
            const deliver = await Deliveries.create({company, adress})
            return res.json(deliver)
        } catch (error) {
            return next(ApiError.badRequest(error.message))
        }
    }
    async getAll(req,res){
        const count = await Deliveries.count();  //task3
        if (count >= 2 && count <= 5) {
            return res.json({ message: "" });
        } 
        else {
            return res.json({ message: "В таблице " +count+" поставщиков." });
        }
        //const books = await Books.findAll()
        //return res.json(devices)
    }
}

module.exports = new DeliveriesController()


