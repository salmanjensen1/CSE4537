var http = require("http");
let path = './public/index.html'


var fs = require('fs');
const MIMES = {
    ".html" : "text/html",
    ".css" : "text/css",
    ".js" : "text/js"
}

function login(req, res){
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end', () => {
        console.log(data); 
        res.end();
    });

    console.log(req.url)
    console.log("Content Type " + req.headers['content-type'])
    console.log("Body Request", req.body)
}

var server = http.createServer((req, res)=>{
    console.log(req.url)
    if(req.url == "/login"){
        login(req, res)
        return
    }
        fs.readFile(`./public/${req.url}`, (err, data)=>{
        if(err)
        {
            res.writeHead(404, {"Content-Type": "text/html"})
            // console.log('File not Found')
            res.write("File not found. Try something else")
            res.write("hello world") 
            res.end()
        }
        else{
            // res.writeHead(200, {"Content-Type": "text/html"})
            let extension = req.url.substring(req.url.lastIndexOf('.'));
            res.writeHead(200, {"Content-Type": MIMES[extension]});        
            console.log('File Found')
            res.write(data)
            res.end()
        }})
})

server.listen(8000)
console.log("listening to port")