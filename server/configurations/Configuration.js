import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const { DATABASE_URL, PORT } = process.env

const connectToDatabase = async () => {
	try {
		await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUndifinedTopology: true, useCreateIndex: true, useFindAndModify: false })
		console.log('SUCCEFULLY CONNECTED TO THE DATABASE!')
	} catch(error) {
		console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ', error)
		process.exit()
	}
}

const connectToPort = (application) => {
	application.listen(PORT, () => {
		console.log(`Server är igång på port: ${PORT}`)
	})
}

export default {
	connectToDatabase,
	connectToPort
}
