// console.log("hi");
require('dotenv').config()

const express = require('express')
const app = express()
const port = 500

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/dd',(req,res)=>{
    res.send('sold to')
})
app.get('/aa', (req, res) => {
    res.send('sold to')
})
app.get('/yt', (req, res) => {
    res.send('<h1>clips</h1>')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})