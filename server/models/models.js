const sequelize = require('../db')

const{DataTypes} = require('sequelize')

const Requests = sequelize.define('requests', {
    client_name: {type: DataTypes.STRING},
    client_surname: {type: DataTypes.STRING},
    client_lastname: {type: DataTypes.STRING},
    adress: {type: DataTypes.STRING},
    request_id: {type: DataTypes.INTEGER, autoIncrement: true, unique: true, primaryKey:true},
    comments: {type: DataTypes.STRING},
    phone_num: {type: DataTypes.BIGINT, unique: true},
    id_master: {type: DataTypes.INTEGER}
})

const User = sequelize.define('user', {
    email:{type:DataTypes.STRING, unique:true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue: 'USER'},
    id: {type: DataTypes.INTEGER, autoIncrement: true, unique: true, primaryKey:true}
})

const Masters = sequelize.define('masters', {
    id_master:{type:DataTypes.INTEGER, allowNull: false, unique:true, autoIncrement:true, primaryKey:true},
    master_name:{type:DataTypes.STRING, allowNull:false},
    master_surname:{type:DataTypes.STRING, allowNull:false},
    master_lastname:{type:DataTypes.STRING},
    rank:{type:DataTypes.STRING, allowNull:false},
    employment_date:{type:DataTypes.DATE, allowNull:false},
    img:{type:DataTypes.STRING}
})

const Repairing_works = sequelize.define('repairing_works', {
    id_device:{type:DataTypes.INTEGER, allowNull:false},
    id_master:{type:DataTypes.INTEGER, allowNull:false},
    SNL_of_master:{type:DataTypes.STRING},
    repairing_start_date:{type:DataTypes.DATE, allowNull:false},
    breaking_type:{type:DataTypes.STRING, allowNull:false},
    repairing_price:{type:DataTypes.INTEGER},
    id_repairing:{type:DataTypes.INTEGER, autoIncrement:true, unique:true, primaryKey:true}
})

const Devices = sequelize.define('devices', {
    id_device:{type:DataTypes.INTEGER, autoIncrement:true, unique:true, primaryKey:true},
    device_name:{type:DataTypes.STRING, allowNull:false},
    device_type:{type:DataTypes.STRING},
    manufacture_date:{type:DataTypes.DATE}
})

const Books = sequelize.define('books', {
    id:{type:DataTypes.INTEGER, autoIncrement:true, unique:true, primaryKey:true},
    title:{type:DataTypes.STRING},
    author:{type:DataTypes.STRING},
    price:{type:DataTypes.INTEGER}
})

const Deliveries = sequelize.define('Deliveries', {
    id:{type:DataTypes.INTEGER, autoIncrement:true, unique:true, primaryKey:true},
    company:{type:DataTypes.STRING},
    adress:{type:DataTypes.STRING}
})


User.hasMany(Requests)
Requests.belongsTo(User)

Requests.hasOne(Masters)
Masters.belongsTo(Requests)

Masters.hasMany(Repairing_works)
Repairing_works.belongsTo(Masters)

Repairing_works.hasOne(Devices)
Devices.belongsTo(Repairing_works)




module.exports = {
    Requests,
    User,
    Masters,
    Repairing_works,
    Devices,
    Books, 
    Deliveries
}