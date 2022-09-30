const { Race } = require('../models/index')
class raceController {

    static async getAll(req, res) {
        try {
            const races = await Race.findAll();
            res.status(200).json(races);
        } catch (err) {
            res.status(500).send({message: err.message});
        }
    }

    static async createRace(req, res) {
        try {
            await Race.create(req.body)
            res.status(200).send({ message: 'Race created successfully' });            
        } catch (err) {
            res.status(500).send({message: err.message});
        }
    }
}

module.exports = raceController;