const Router = require('express').Router
const router = new Router()
const brandRoutes = require('./brand')
const deviceRoutes = require('./device')
const typeRoutes = require('./type')
const userRoutes = require('./user')

router.use('/brand', brandRoutes)
router.use('/device', deviceRoutes)
router.use('/type', typeRoutes)
router.use('/user', userRoutes)

module.exports = router