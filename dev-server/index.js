/*const express = require('express') *///bring express package but is better with bellow
import express from 'express';
const app = express() //instatiate express app
const port = 3000
//create a get route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`ex app listening at http://localhost:${port}`)
})