// 1. Initialize project
// npm init -y

// 2. Download express module
// yarn add express

// 3. Import express module
const express = require('express');

// 4. Create rest object
const app = express();

// 5. Import db connection
const obj = require('./config/db_connection');

// 6. Create rest APIs
app.get("/oracle", (req, res) => {
    res.json(obj.oracle());
});

app.get("/mysql", (req, res) => {
    res.send(obj.mysql());
});

app.get("/mongodb", (req, res) => {
    res.send(obj.mongodb());
});

app.get("/mssql", (req, res) => {
    res.send(obj.mssql());
});

// 7. Assign port number
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// 8. URLs for testing
// http://localhost:8080/oracle
// http://localhost:8080/mysql
// http://localhost:8080/mongodb
// http://localhost:8080/mssql
