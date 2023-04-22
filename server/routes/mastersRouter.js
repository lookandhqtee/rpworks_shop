const Router = require('express')
const router = new Router()
const MastersController = require('../controllers/mastersController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), MastersController.create)
router.get('/',MastersController.getAll)
router.get('/:id_master',MastersController.getOne)
module.exports = router