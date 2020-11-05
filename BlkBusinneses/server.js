// ************
// Dependencies
// ************
const express = require('express')
const mongoose = require('mongoose')
const businessController = require('./controllers/router.js')
const app = express()

// ************
// Port
// ************
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000

// ************
// Middleware
// ************

// Use Controller
app.use('/blk', businessController)

// ************
// Globl Configuration
// ************
const mongoURI = process.env.mongoURI || 'mongodb://localhost:27017/' + 'business'
const db = mongoose.connection

// Connect to Mongo
mongoose.connect(
	mongoURI, {
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true
	}, () => {
		console.log('the connection with mongod is established')
	}
)

// Connection Error/Success
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))


// Server PORT
app.listen(PORT, () => {
    console.log('BLK Server is listening ' + PORT)
})