const Router = require('express')
const router = new Router()
const booksController = require('../controllers/booksController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), booksController.create)
router.get('/', checkRole('ADMIN'), booksController.getAll)

module.exports = router 