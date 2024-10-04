const express = require('express');
const my_fun = require('./config/my_fun');

const app = express();

app.get("/", (req, res) => {
    let uname = req.query.uname;
    let upwd = req.query.upwd;
    res.send(my_fun(uname, upwd));
});

app.listen(8080)
console.log("Server listening on port 8080");
