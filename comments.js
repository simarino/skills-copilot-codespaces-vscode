// Create web server
var http = require('http');
var fs = require('fs');

// Create server
http.createServer(function (req, res) {
    // Open file
    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'}); // Send response header
        res.write(data); // Send response body
        res.end(); // End response
    });
}).listen(8080); // Server object listens on port 8080

// Path: comments.js
// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');

// Create server
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    // Open file
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'}); // Send response header
            return res.end("404 Not Found"); // Send response body
        }
        res.writeHead(200, {'Content-Type': 'text/html'}); // Send response header
        res.write(data); // Send response body
        return res.end(); // End response
    });
}).listen(8080); // Server object listens on port 8080

// Path: comments.js
// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');

// Create server
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    // Open file
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'}); // Send response header
            return res.end("404 Not Found"); // Send response body
        }
        res.writeHead(200, {'Content-Type': 'text/html'}); // Send response header
        res.write(data); // Send response body
        return res.end(); // End response
    });
}).listen(8080); // Server object listens on port 8080

// Path: comments.js
// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');

//
