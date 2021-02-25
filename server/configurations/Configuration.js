import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectToDatabase = async () => {
	try {
		const DB_URL = process.env.DATABASE_URL
		await mongoose.connect(DB_URL, { useNewUrlParser: true, useUndifinedTopology: true, useCreateIndex: true })
		console.log('SUCCEFULLY CONNECTED TO THE DATABASE!')
	} catch(error) {
		console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ', error)
		process.exit()
	}
}

const connectToPort = (application) => {
	const port = process.env.PORT
	application.listen(port, () => {
		console.log(`Server är igång på port ' ${port}`)
	})
}

export default {
	connectToDatabase,
	connectToPort
}
