/**
 * Created by raghug on 2/23/14.
 */

/**
 * Module dependencies.
 */

var routes = require('./routes');
var home = require('./routes/home');
var http = require('http');
var path = require('path');
var url = require("url");
var cp = require('child_process');

function onRequest(request, response) {
    var url_parts = url.parse(request.url, true);
    var pathname = url_parts.pathname;
    var query = url_parts.query;

console.log(query.c);
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/html"});
    if(pathname == "/index")
    {

        setTimeout(function() {
                routes.index(request,response,query.c);
            }, 0);
    }
    else if(pathname == "/")
    {

        setTimeout(function() {
            home.home(request,response);
        }, 0);
    }
    else
    {
        response.write("I'm instant frame");
        response.end();
    }

}

http.createServer(onRequest).listen(81);
console.log("Server has started.");
