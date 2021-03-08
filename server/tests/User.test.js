import Chai from 'chai'
import ChaiHTTP from 'chai-http'
/*import { request, response } from 'express'*/
import { describe, it as test } from 'mocha'
import StatusCode from '../configurations/Statuscode.js'
import application from '../Server.js'

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)

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
	const userID = '604229dcbabe392a9440909c'
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

describe('TESTING THE USER API ENTINITY', () => {
	testingNonExistingRoute()
	getAllUsers()
	updateUser()
})
