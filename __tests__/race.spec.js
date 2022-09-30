const axios = require('axios');
const port = process.env.PORT || 3000;

describe("get all races registered", () => {
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

describe("create race", () => {
    it("should return stats 201", async () => {
        const url = `http://localhost:${port}/race`
        const data = { 
            startZipCode: '05754070',
            endZipCode: '05754070', 
            price: 10.02 
        }

        const response = await axios.post(url, data)
        expect(response.status).toBe(201);
    })
})