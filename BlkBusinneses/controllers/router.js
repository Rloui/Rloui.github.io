// ************
// Dependencies
// ************
const express = require('express')
const Business = require('../models/businesses')
const businessSeed = require('../models/businessSeed.js')
const methodOverride = require('method-override')


// ************
// Globl Configuration
// ************
const router = express.Router()

// ************
// Middleware
// ************
router.use(methodOverride('_method'))


//Routes
// Index Route
router.get('/', (req, res) => {
    Business.find({}, (err, allBusinesses) => {
        res.render('index.ejs', {
            business: allBusinesses
        })
    })
}) 

// Delete Route
router.delete('/:id', (req, res) => {
    res.send('deleting')
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