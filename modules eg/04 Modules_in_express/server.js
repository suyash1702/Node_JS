//import modules
let express = require('express')
let login = require('./login/login')
let logout = require('./logout/logout')
//create rest object
let app = express()
//use modules
app.use("/login", login)
app.use("/logout", logout)
app.listen(8080)
console.log('Server listening port no 8080')
