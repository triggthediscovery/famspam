// Load the http module to create an http server.
var http = require('http');
    fs = require('fs');
    url = require('url');
    
var cid=0;
    
var User = {
  id: 0,
  uname: '',
  psswd: '',
  msubs: [],
  osubs: []
};

var User = function User(uname, psswd){
    this.constructor;
    this.id = cid;
    
    cid++;
    
	this.uname = uname;
	this.psswd = psswd;
	this.msubs = [];
	this.osubs = [];
}

function findByName(name) {
	for (var i=0; i<users.length; i++) {
		if (users[i].uname==name) return users[i];
	}
	
	return false;
}

/*
var inok=false;
var jsok=false;
var cwok=false;
*/
var jss, htmls, cowss, uphs, upjs;

var users = [new User('dood','pass'), new User('kewldood','pass')];

users[0].msubs.push(users[1].uname);
users[0].osubs.push(users[1].uname);

fs.readFile('./index.html', 'utf8', function (err, html) {
    if (err) {
        throw err; 
    }       
    inok=true;
    htmls=html;
});

fs.readFile('./main.js', 'utf8', function (err, js) {
    if (err) {
        throw err; 
    }       
    jsok=true;
    jss=js;
});

fs.readFile('./cows.html', 'utf8', function (err, cows) {
    if (err) {
        throw err; 
    }       
    cwok=true;
    cowss=cows;
});

fs.readFile('./upage.html', 'utf8', function (err, uph) {
    if (err) {
        throw err; 
    }       
    cwok=true;
    uphs=uph;
});

fs.readFile('./upage.js', 'utf8', function (err, upj) {
    if (err) {
        throw err; 
    }       
    cwok=true;
    upjs=upj;
});

http.createServer(function(request, response) {
	if (request.url==("/")) { 
		response.write(htmls);  
		response.end(); 
    }
    
    if (request.url==("/cows")) {
		response.write(cowss);  
		response.end(); 
    }
    
    if (request.url.includes("/upage/") && !request.url.includes("/upage.js")) {
    
    	var pos = request.url.search("upage") + 6;
    	
    	var un =  request.url.substr(pos);
    	
    	pos = un.search("/");

    	un = un.substr(0,pos);

    	var newpage = uphs.replace("uname",un);
    	
    	var info = findByName(un);
    	
    	if (info) {
    		newpage = newpage.replace("msubs",info.msubs);
    		newpage = newpage.replace("osubs",info.osubs);
    		
			response.write(newpage);  
			response.end(); 
    	}
    }
    
    if (request.url.includes("/upage.js")) {
		response.write(upjs);  
		response.end(); 
    }
    
    if (request.url==("/main.js")) {
    	response.write(jss);  
		response.end(); 
    }
}).listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
