const Router = require('express')
const router = new Router()
const RequestsController = require('../controllers/requestsController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', RequestsController.create)
router.get('/', checkRole('ADMIN'), RequestsController.getAll)

module.exports = router