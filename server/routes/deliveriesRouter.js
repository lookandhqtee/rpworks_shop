const Router = require('express')
const router = new Router()
const deliveriesController = require('../controllers/deliveriesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), deliveriesController.create)
router.get('/', checkRole('ADMIN'), deliveriesController.getAll)

module.exports = router