//import express module
let express = require('express')
//create rest object
let app = express() //where app is rest object
//create get request
app.get("/", (req, res) => {
    console.log('Default get request sent')
    //res.send({'message':'Default get request sent'})
    res.json({ 'message': 'Default get request sent' })
})
app.get("/fetch",(req,res)=>{
    res.json({ 'message': 'fetch get request' })
})
app.post("/",(req,res)=>{
    res.send({ 'message': 'default post request' })
})
//create one more post request
app.post('/login', (req, res) => {
    res.send({ 'message': 'login post request' })
})
//create port
let port = 8080
//assign port no
app.listen(port, () => {
    console.log('Server listening port no ', port)
})
