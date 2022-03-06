require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const sequelize = require('./db')
const router = require('./routes')
const errorHandler = require('./middleware/ErrorHandling')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

app.use('/api', router)

// INFO: Error handlers always after all routes and middleware
app.use(errorHandler)

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()

		app.listen(PORT, () => console.log('Server is running on port', PORT))
	} catch (err) {
		console.error(err)
	}
}

start()