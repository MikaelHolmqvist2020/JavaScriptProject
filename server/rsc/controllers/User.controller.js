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
			message: 'Error occured while trying to retrieve user by ID: ' + req.params.userId,
			error: error.message
		})
	}
}

const getUserWithUsernameQuery = async (req, res) => {
	try {
		const databaseResponse = await UserModel.find({ username: req.query.username })
		res.length !== 0 
			? res.status(StatusCode.OK).send(databaseResponse)
			: res.status(StatusCode.NOT_FOUND).send({ message: 'Could not find user by username ' + req.query.username })
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVICE_ERROR).send({
			message: 'Error occured while trying to retrieve user by username: ' + req.params.userId,
			error: error.message
		})
	}
}

const updateUser = async (req, res) => {
	try {
		if(!req.body) { return res.status(StatusCode.BAD_REQUEST).send({ message: 'cannot update empty values'}) }
		const databaseResponse = await UserModel.findByIdAndUpdate(req.params.userId, {
			username: req.body.username,
			password: req.body.password
		}, { new: true })
		res.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVICE_ERROR).send({
			message: 'Error occured while trying to update values of the user with ID ' + req.params.userId,
			error: error.message
		})
	}
}

const deleteUser = async (req, res) => {
	try {
		const databaseResponse = await UserModel.findByIdAndDelete(req.params.userId)
		res.status(StatusCode.OK).send({
			message: `Succesfully deleted the USER with username: ${res.username} and ID: ${req.params.userId}`
		})
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVICE_ERROR).send({
			message: 'Error occured while trying to delet USER with ID: ' + req.params.userId,
			error: error.message
		})
	}
}

export default {
	createUser,
	getAllUsers,
	getUserWithId,
	getUserWithUsernameQuery,
	updateUser,
	deleteUser
}