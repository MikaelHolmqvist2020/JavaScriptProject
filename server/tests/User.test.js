import Chai from 'chai'
import ChaiHTTP from 'chai-http'
/*import { request, response } from 'express'*/
import { describe, it as test } from 'mocha'
import StatusCode from '../configurations/Statuscode.js'
import application from '../Server.js'

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)
const user = {
	username: randomString,
	password: randomString
}
const userID = '604229dcbabe392a9440909c'

const testingNonExistingRoute = () => {
	describe('Testing a route that not exist', () => {
		test('Expecting 404 not found', (done) => {
			Chai.request(application)
				.get(`/${randomString}`)
				.end((request, response) => {
					response.should.have.a.status(StatusCode.NOT_FOUND)
				done()
				})
		})
	})
}

const createUser = () => {
	describe('Testing CREATE(POST) method for user etinity', () => {
		test('Expecting a user to be created', (done) => {
			Chai.request(application)
				.post('/user')
				.send(user)
				.end((error, response) => {
					response.should.have.a.status(StatusCode.CREATED)
					response.body.should.be.a('object')
					response.body.should.have.property('username').eq(user.username)
					response.body.should.have.property('password').eq(user.password)
					done()
				})
		})
	})
}



function getAllUsers() {
	test('Expecting a return of all users in database', done => {
		Chai.request(application)
			.get('/user')
			.end((request, response) => {
				response.should.have.a.status(StatusCode.OK)
				response.body.should.be.a('array')
				response.body.length.should.be.eq(response.body.length)
				done()
			})
	})
}

const updateUser = () => {
	test('Should manipulate data of a current object in the user entinity', done => {
		Chai.request(application)
			.put(`/user/${userID}`)
			.send({ username: 'Micke', password: 'admin' })
			.end((request, response) => {
				response.should.have.a.status(StatusCode.OK)
				response.should.have.be.a('object')
				response.body.should.have.property('_id').eq(userID)
				response.body.should.have.property('username').eq('Micke')
				response.body.should.have.property('password').eq('admin')
				done()

			})
	})
}

const deleteUser = () => {
	describe('Testing (DELETE) a user in the database', () => {
		test('Expecting a user to be deleted', (done) => {
			Chai.request(application)
				.delete(`/user/${userID}`)
				.end((request, response) => {
					response.should.have.status(StatusCode.OK)
					done()
				})
		})
	})
}

describe('TESTING THE USER API ENTINITY', () => {
	testingNonExistingRoute()
	createUser()
	getAllUsers()
	updateUser()
	deleteUser()
})

/*	
createUser,
getAllUsers,
getUserWithId,
queryUsername,
updateUser,
deleteUser 
*/
