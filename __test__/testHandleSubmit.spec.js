import { handleSubmit } from "../src/client/js/formHandler.js"
import "babel-polyfill"
var cors = require('cors')
const axios = require('axios')

import express from 'express'
import supertest from 'supertest'

const app = express()

app.use(cors())

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {

        expect(handleSubmit).toBeDefined();
    })
});

test("GET /nlp", async () => {
    await supertest(app).get("/nlp")
        .then((response) => {
            // Check type and length
            expect(response).toBeTruthy();
            // expect(response.body[0]._id).toBe(post.id);
        });
});


test('POST /nlp', async () => {
    const data = {
        text: "https://techcrunch.com/2021/09/27/introducing-techcrunch-plus/",
    }
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:5000/nlp',
            data
        })
        expect(response.agreement).toBeTruthy();
        expect(response.subjectivity).toBeTruthy();
        expect(response.confidence).toBeTruthy();
        expect(response.irony).toBeTruthy();
    } catch (err) {
        console.log(`Error ${err}`)
    }
});

app.listen(5000);
