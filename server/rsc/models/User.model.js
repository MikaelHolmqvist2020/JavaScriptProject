import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = Schema({
	username: {
		type: String,
		unique: true,
		allowNull: false,
		required: true,
	},
	password: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		min: [18, 'You need to be above 18'],
		max: [90, 'Sorry!'],
		required: false
	}
}, { timestamps: true })

const UserModel = model('user', userSchema)
export default UserModel