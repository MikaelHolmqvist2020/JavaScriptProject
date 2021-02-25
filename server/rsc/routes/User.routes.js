import UserController from '../controllers/User.controller.js'

const routes = (application) => {
	application.post('/user', UserController.createUser)
	application.get('/user', UserController.getAllUsers)
	application.get('/user/:userId', UserController.getUserWithId)
	application.get('/searchuser', UserController.getUserWithUsernameQuery)
}

export default {
	routes
}