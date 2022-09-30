const axios = require('axios');
const port = process.env.PORT || 3000;

async function createRaceRoute() {
    const url = `http://localhost:${port}/race`
    const data = {
        cep_inicial: '05754070',
        cep_final: '05754070', 
        preco: 10.02
    }

    const response = await axios.post(url, data)
    return response
}

describe("test GET method /race", () => {
    it("should return stats 200", async () => {
        const response = await axios.get(`http://localhost:${port}/race`)
        expect(response.status).toBe(200);
    })

    it("should return a list", async () => {
        const response = await axios.get(`http://localhost:${port}/race`)
        const races = response.data
        expect(Array.isArray(races)).toBe(true);
    })
})

describe("test POST method /race", () => {
    it("should return stats 201", async () => {
        const response = await createRaceRoute()
        expect(response.status).toBe(201);
    })
})

describe("test GET method /race/:id", () => {
    it("should return an race object", async () => {
        const createResponse = await createRaceRoute()
        const raceCreated = createResponse.data
        const id = raceCreated.id

        const response = await axios.get(`http://localhost:${port}/race/${id}`)
        const race = response.data
        expect(typeof race === "object" && race !== null).toBe(true);
    })
})

describe("test PUT method /race/:id", () => {
    it("should create and update a race object", async () => {
        const createResponse = await createRaceRoute()
        const race = createResponse.data

        const url = `http://localhost:${port}/race/${race.id}`
        const data = { cep_inicial: "05754071", cep_final: "05754071", price: "10.5" }
        const updateResponse = await axios.put(url, data)
        const raceUpdated = updateResponse.data

        expect(race.cep_inicial).not.toBe(raceUpdated.cep_inicial)
        expect(race.cep_final).not.toBe(raceUpdated.cep_final)
        expect(race.price).not.toBe(raceUpdated.preco)
    })
})

describe("test DELETE method /race/:id", () => {
    it("should create and cancel a race", async () => {
        const createResponse = await createRaceRoute()
        const raceCreated = createResponse.data
        const id = raceCreated.id

        const url = `http://localhost:${port}/race/${id}`
        const response = await axios.delete(url)
        expect(response.status).toBe(204)
    })
})
