import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import Middlewears from './rsc/middelwears/Middlewears.js'
import Configuration from './configurations/Configuration.js'
import UserRoutes from './rsc/routes/User.routes.js'
import cors from 'cors'

const application = express()
application.use(express.json())
application.use(cors({ credentials: true }))
application.use(helmet())
application.use(morgan('common'))

UserRoutes.routes(application)
application.use(Middlewears.notFound)
application.use(Middlewears.errorHandeler)

Configuration.connectToDatabase()
Configuration.connectToPort(application)

export default application
