const Router = require('express')
const router = new Router()
const devicesRouter = require('./devicesRouter')
const userRouter = require('./userRouter')
const mastersRouter = require('./mastersRouter')
const repairing_worksRouter = require('./repairing_worksRouter')
const requestsRouter = require('./requestsRouter')
const booksRouter = require('../routes/booksRouter')
const deliveriesRouter = require('./deliveriesRouter')

router.use('/requests',requestsRouter)
router.use('/user',userRouter)
router.use('/masters',mastersRouter)
router.use('/repairing_works',repairing_worksRouter)
router.use('/devices',devicesRouter)
router.use('/books', booksRouter)
router.use('/deliveries', deliveriesRouter)

module.exports = router