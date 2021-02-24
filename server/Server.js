import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import middlewears from './rsc/middelwears/Middlewears.js'
import Configuration from './configurations/Configuration.js'

dotenv.config()
const application = express()

application.use(helmet())
application.use(morgan('common'))

application.get('/recipe', (request, response) => {
	response.send('Pancakes!')
})

application.use(middlewears.notFound)
application.use(middlewears.errorHandeler)

Configuration.connectToDatabase()
Configuration.connectToPort(application)

