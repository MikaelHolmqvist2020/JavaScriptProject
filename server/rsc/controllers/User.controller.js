import UserModel from '../models/User_model.js'

const createUser = async (request, response) => {

	const user = new UserModel({
		username: request.body.username,
		password: request.body.password
	})

	try {
		const response = await user.save()
		response.status(201).send(response)
	} catch (error) {
		response.status(500).send({ message: error.message })
	}
}

export default {
	createUser
}