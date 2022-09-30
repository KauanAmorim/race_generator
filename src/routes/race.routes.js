const express = require('express')
const raceController = require('../controllers/raceController')

const router = express.Router()

router.get('/race', raceController.getAll)
router.get('/race/:id', raceController.getRace)
router.post('/race', raceController.createRace)
router.put('/race/:id', raceController.updateRace)
router.delete('/race/:id', raceController.deleteRace)

module.exports = router