const Router = require('express')
const router = new Router()
const DevicesController = require('../controllers/devicesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), DevicesController.create)
router.get('/', checkRole('ADMIN'), DevicesController.getAll)

module.exports = router