const express = require('express')
const raceController = require('../controllers/raceController')

const router = express.Router()

router.get('/race', raceController.getAll)
router.post('/race', raceController.createRace)

module.exports = router