const Router = require('express').Router
const router = new Router()
const typeController = require('../controllers/type')
const roleMiddleware = require('../middleware/role')

router.post('/', roleMiddleware('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

module.exports = router