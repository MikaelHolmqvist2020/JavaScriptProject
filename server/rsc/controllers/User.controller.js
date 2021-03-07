import UserModel from '../models/User.model.js'
import StatusCode from '../../configurations/StatusCode.js'


const createUser = async (req, res) => {
	const user = new UserModel({
		username: req.body.username,
		password: req.body.password,
		age: req.body.age
	})

	try {
		const databaseResponse = await user.save()
		res.status(StatusCode.CREATED).send(databaseResponse)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVICE_ERROR).send({ 
			message: 'Error while trying to create user',
			stack: error 
		})
	}
}

const getAllUsers = async (req, res) => {
	try {
		const databaseResponse = await UserModel.find()
		res.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVICE_ERROR).send({ message: error.message })
	}
}

const getUserWithId = async (req, res) => {
	try {
		const databaseResponse = await UserModel.findById(req.params.userId)
		res.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVICE_ERROR).send({
			message: `Error occured while trying to retrieve user by ID: ${req.params.userId}`,
			error: error.message
		})
	}
}

const queryUsername = async (req, res) => {
	try {
		const databaseResponse = await UserModel.find({ username: req.query.username })
		res.status(StatusCode.OK).send(databaseResponse)	
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVICE_ERROR).send({
			message: `Error occured while trying to retrieve user by username: ${req.query.username}`,
			error: error.message
		})
	}
}

const updateUser = async (req, res) => {
	const userId = req.params.userId
	const data = {
		username: req.body.username,
		password: req.body.password
	}

	try {
		const databaseResponse = await UserModel.findByIdAndUpdate(userId, data, { new: true })
		res.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVICE_ERROR).send({
			message: `Error occured while trying to update values of the user with ID ${userId}`,
			error: error.message
		})
	}
}

const deleteUser = async (req, res) => {
	try {
		const userId = req.params.userId
		const databaseResponse = await UserModel.findByIdAndDelete(userId)
		res.status(StatusCode.OK).send({ message: `Succesfully deleted the USER`, data: databaseResponse })
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVICE_ERROR).send({
			message: `Error occured while trying to delet USER with ID: ${userId}`,
			error: error.message
		})
	}
}

export default {
	createUser,
	getAllUsers,
	getUserWithId,
	queryUsername,
	updateUser,
	deleteUser
}