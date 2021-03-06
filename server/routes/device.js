const Router = require('express').Router
const router = new Router()
const deviceController = require('../controllers/device')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router