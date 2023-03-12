const http = require('http');
const server = http.createServer((req,res)=>{
    console.log('Vishal');
});
server.listen(4000);