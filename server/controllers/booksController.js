const {Books} = require('../models/models')
const ApiError=require('../error/ApiError')

class BooksController{
    async create(req,res, next){
        try {
            const {title, author, price} = req.body
            const book = await Books.create({title, author, price})
            return res.json(book)
        } catch (error) {
            return next(ApiError.badRequest(error.message))
        }
    }
    async getAll(req,res){
        const books = await Books.findAll();
        const result = await Books.sequelize.query('SELECT AVG(price) as avg_price FROM Books'); //task1
        const result2 = await Books.sequelize.query('SELECT SUM(price) as total_price FROM Books'); //task2
        const avgPrice = result[0][0].avg_price * 123.34; //task1
        const totalPrice = result2[0][0].total_price; //task2
        return res.json({avgPrice, totalPrice});
        //const books = await Books.findAll()
        //return res.json(devices)
    }
}

module.exports = new BooksController()
