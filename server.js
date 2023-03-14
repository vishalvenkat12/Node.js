const http = require('http');
const server = http.createServer((req,res)=>{
    const url = req.url;
    if (url === '/home') {
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome home</h1></body>');
    res.write('</html>');
    return res.end();
    }
});
server.listen(4000);