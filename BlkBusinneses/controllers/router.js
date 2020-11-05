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

// Show Route
router.get('/:id', (req, res) => {
    Business.findById(req.params.id, (err, foundBusiness) => {
        if (err) console.log(err.message)
        console.log('Found Business ' + foundBusiness)
        res.render('show.ejs', {
            selectBusiness: foundBusiness
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