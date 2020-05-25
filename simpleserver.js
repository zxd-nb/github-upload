var a = require('http');
var os = require('os');

var server = a.createServer();

server.on('request', function () {
    console.log('requested');
})

server.listen(3000,function(){
    console.log(os.cpus());
    
})