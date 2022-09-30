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

    static async getRace(req, res) {
        try {
            const { id } = req.params
            const where = { where: { id: Number(id) } }
            const race = await Race.findOne(where)
            return res.status(200).json(race)
        } catch (err) {
            res.status(500).send({message: err.message});
        }
    }

    static async createRace(req, res) {
        try {
            const data = req.body
            const race = await Race.create(data)
            res.status(201).send(race);            
        } catch (err) {
            res.status(500).send({message: err.message});
        }
    }

    static async updateRace(req, res) {
        try {
            const { id } = req.params
            const newData = req.body
            delete newData.ativo

            // update
            const where = { where: { id: Number(id) } }
            await Race.update(newData, where)

            // return data
            const race = await Race.findOne(where)
            res.status(200).send(race)
        } catch (err) {
            res.status(500).send({message: err.message});
        }
    }

    static async cancelRace(req, res) {
        try {
            const { id } = req.params
            const where = { where: { id: Number(id) } }
            await Race.update({ ativo: 0 }, where)
            res.status(204).send()
        } catch (err) {
            res.status(500).send({message: err.message});
        }
    }
}

module.exports = raceController;