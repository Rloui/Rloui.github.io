// ************
// Dependencies
// ************
const express = require('express')
const Business = require('../models/businesses')
const businessSeed = require('../models/businessSeed.js')

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
    Business.find({}, (err, allBusinesses) => {
        res.render('index.ejs', {
            business: allBusinesses
        })
    })
}) 

// Seed Route
router.get('/seed', (req, res) => {
    Business.create( businessSeed, (err, dataCreated)=>{
        console.log(dataCreated)
        res.redirect('/blk');
    })
});

module.exports = router