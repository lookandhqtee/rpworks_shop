const Router = require('express')
const router = new Router()
const Repairing_worksController = require('../controllers/repairing_worksController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), Repairing_worksController.create)
router.get('/', checkRole('ADMIN'), Repairing_worksController.getAll)

module.exports = router