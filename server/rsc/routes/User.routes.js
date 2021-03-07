import UserController from '../controllers/User.controller.js'

const routes = (application) => {
	application.post('/user', UserController.createUser)
	application.get('/user', UserController.getAllUsers)
	application.get('/user/:userId', UserController.getUserWithId)
	application.get('/search', UserController.queryUsername)
	application.put('/user/:userId', UserController.updateUser)
	application.delete('/user/:userId', UserController.deleteUser)
}

export default {
	routes
}