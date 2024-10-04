let http = require ('http')
let server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1> Welcome to http server<h1>')
    res.end()
})
server.listen(8080)
console.log('Server listening port no 8080')