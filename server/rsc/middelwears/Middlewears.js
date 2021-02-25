import dotenv from 'dotenv'

dotenv.config()

const notFound = (request, response, next) => {
	const error = new Error(`Not found: ${request.originalUrl}`)
	response.status(404)
	next(error)
}

const errorHandeler = (error, request, response, next) => {
	const statuscode = response.statusCode === 200 ? 500 : response.statusCode
	response.status(statuscode)
	response.json({
		statuscode: statuscode,
		message: error.message,
		stackTrace: process.env.ENVIROMENT === 'PRODUCTION' ? 'This Trace is BLOCKED in PRODUCTION ENVIROMENT!' : error.stack
	})
	next(error)
}

export default {
	notFound,
	errorHandeler
}