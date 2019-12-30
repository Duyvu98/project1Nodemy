var Router = require('express').Router;
var router = Router();
var path = require('path');


router.get('/redirect', function(req, res) {
        res.sendFile(path.join(__dirname, '/public/html/redirect.html'))
    })
    // router.get("/login", (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public/html/dangki.html'))
    // })

console.log(__dirname);
module.exports = router