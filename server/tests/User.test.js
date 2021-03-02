import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { response } from 'express'
import { describe, it as test } from 'mocha'
import StatusCode from '../configurations/Statuscode.js'
import application from '../Server.js'

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)
const userId = '6037d9a0ac95fb09644c914b'
const user = {
	username: randomString,
	password: randomString,
}

const testingNoExistingRoute = () => {
	describe('Testing a route thet not exist', () => {
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
	describe('Testing CREATE(POST) method for user entity', () => {
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

const getAllUsers = ()=> {
	describe('Fetching all users(GET)', () => {
		test('Expecting to return all users', (done) => {
			Chai.request(application)
				.get('/user')
				.end((error, response) => {
					response.should.have.status(StatusCode.OK)
					response.body.should.be.a('array')
					response.body.length.should.be.eq(response.body.length)
					done()
				})
		})
	})
}

const updateUser = () => {
	describe('Updating(PUT) a user in the database', () => {
		test('Expecting a user to be updated', (done) => {
			Chai.request(application)
				.put(`/user/${userId}`)
				.send(user)
				.end((error, response) => {
					response.should.have.status(StatusCode.OK)
					response.body.should.be.a('object')
					response.body.should.have.property('_id').eq(userId)
					response.body.should.have.property('username').eq(user.username)
					response.body.should.have.property('password').eq(user.password)
					done()
				})
		})
	})
} 

const deleteUser = () => {
	describe('Deliting(DELETE) a user in the database', () => {
		test('Expecting a user to be deleted', (done) => {
			Chai.request(application)
				.delete(`/user/${userId}`)
				.end((error, respons) => {
					response.should.have.status(StatusCode.OK)
					done()
				})
		})
	})
}

describe('TESTING THE USER_API ROUTE', () => {
	testingNoExistingRoute()
	createUser()
	getAllUsers()
	updateUser()
	deleteUser()
})
