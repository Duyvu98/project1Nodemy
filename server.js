var express = require("express")
var server = express()
var fs = require("fs")
var path = require("path")
var userRouter = require('./router.js');

server.use(express.urlencoded())

server.use('/', express.static(path.join(__dirname, './public')))

server.use('/api/v1/user', userRouter);
server.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/project1.html'))
})



// server.get('/', function(req, res, next) {
//     fs.readFile('./project1.html', "utf-8", function(err, data) {
//         res.send(data)
//     })

// })
// server.get("/home", function(req, res, next) {
//     res.send("<h1>Home Page</h1>")
// })



server.listen(3000, function() {
    console.log("listen to 3000");
})