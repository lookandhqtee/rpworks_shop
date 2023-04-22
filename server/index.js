require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

//const router = express.Router();
/*const { Pool } = require('pg');*/

/*const pool = new Pool({
  user: 'admin@mail.ru',
  host: 'localhost',
  database: 'repairing_works_shop',
  password: '26062003',
});*/

/*router.post('/masters', async (req, res) => {
    try {
      const { master_name, master_surname, master_lastname, rank, employment_date, img } = req.body;
      const query = `
        INSERT INTO masters (master_name, master_surname, master_lastname, rank, employment_date, img)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
      `;
      const values = [master_name, master_surname, master_lastname, rank, employment_date, img];
      const result = await pool.query(query, values);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });*/
  
module.exports = router;

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


//Обработка ошибок, последний Middleware 
app.use(errorHandler)


const start = async()=>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=>console.log('Сервер начал отрабатывать на порту '+ PORT + ' и ожидает подключения =)'))
    } catch (e) {
        console.log(e)
    }
}

start()