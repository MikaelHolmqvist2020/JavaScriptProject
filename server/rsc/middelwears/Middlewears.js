import dotenv from 'dotenv'

dotenv.config()
const { ENVIROMENT } = process.env

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
		stackTrace: ENVIROMENT === 'PRODUCTION' ? null : error.stack
	})
	next(error)
}

export default {
	notFound,
	errorHandeler
}