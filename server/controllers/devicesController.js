const {Devices} = require('../models/models')
const ApiError=require('../error/ApiError')

class DevicesController{
    async create(req,res){
        const {device_name, device_type, manufacture_date} = req.body
        const device = await Devices.create(req.body)
        return res.json(device)
    }
    async getAll(req,res){
        const devices = await Devices.findAll()
        return res.json(devices)
    }
}

module.exports = new DevicesController()