import dotenv from 'dotenv'
import Statuscode from '../../configurations/StatusCode.js'

dotenv.config()
const { ENVIROMENT } = process.env

const notFound = (request, response, next) => {
	const error = new Error(`invalid URL - Not found: ${request.originalUrl}`)
	response.status(StatusCode.NOT_FOUND)
	next(error)
}

const errorHandeler = (error, request, response, next) => {
	const statuscode = (response.statusCode === StatusCode.OK) 
		? StatusCode.INTERNAL_SERVICE_ERROR
		: response.statusCode

	response.status(statuscode)
	response.json({
		statuscode: statuscode,
		message: error.message,
		stackTrace: ENVIROMENT === 'PRODUCTION' ? null : error.stack
	})
}

export default {
	notFound,
	errorHandeler
}