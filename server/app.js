const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`<h2>Welcome to CircleCI`)
})

const port = 6000
app.listen(port, () => {
    console.log('App started')
})
