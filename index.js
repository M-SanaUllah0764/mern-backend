require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.BACKEND_APP_PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello about page!')
})

app.listen(port, () => {
    console.log(`backend app listening on port http://localhost:${port}`)
})