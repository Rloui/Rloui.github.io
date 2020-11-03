// ************
// Dependencies
// ************
const express = require('express')
const Business = require('../models/businesses')

// ************
// Middleware
// ************

// ************
// Globl Configuration
// ************
const router = express.Router()

//Routes
// Index Route
router.get('/', (req, res) => {
    res.send('Index working')
}) 

module.exports = router