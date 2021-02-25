import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import Middlewears from './rsc/middelwears/Middlewears.js'
import Configuration from './configurations/Configuration.js'
import UserRoutes from './rsc/routes/User.routes.js'

dotenv.config()
const application = express()
application.use(bodyParser.urlencoded({ extended: true }))
application.use(bodyParser.json())
application.use(helmet())
application.use(morgan('common'))

UserRoutes.routes(application)
application.use(Middlewears.notFound)
application.use(Middlewears.errorHandeler)

Configuration.connectToDatabase()
Configuration.connectToPort(application)

