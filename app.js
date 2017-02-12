// Load the http module to create an http server.
var http = require('http');
    fs = require('fs');
    url = require('url');

var cid=0;
    
var User = {
  id: 0,
  uname: '',
  psswd: '',
  email: '',
  image: '',
  descr: '',
  forwd: [],
  msubs: [],
  osubs: [],
  block: []
};

var User = function User(uname, psswd, email, image, descr){
    this.constructor;
    this.id = cid;
    
    cid++;
    
	this.uname = uname;
	this.psswd = psswd;
	this.email = email;
	this.image = image;
	this.descr = descr;
	this.forwd = [];
	this.msubs = [];
	this.osubs = [];
	this.block = [];
}

var SeidKey = {
	id: 0,
	uname: ''
}

var SeidKey = function SeidKey(id, uname) {
	this.constructor;
	this.id=id;
	this.uname=uname;
}

function findByName(name) {
	for (var i=0; i<users.length; i++) {
		if (users[i].uname==name) return users[i];
	}
	
	return false;
}

function findByKey(id) {
	for (var i=0; i<sessionID.length; i++) {
		if (sessionID[i].id==id) {
			return sessionID[i];
		}
	}
	
	return false;
}

function findByNameArr(name, arr) {
	
	
	for (var i=0; i<arr.length; i++) {
		if (arr[i].uname==name) return arr[i];
	}
	
	return false;
}

var jss, htmls, cowss, uphs, upjs;

var users = [new User('AdamNieto','pass','jvanatt3@binghamton.edu', 'u1.jpg', 'Adam is a cool dood who does code'), 
			 new User('JohnVanAtta','pass','triggthediscovery@gmail.com', 'u2.jpg', "john is so cool he's cold"), 
			 new User('HarryWoodworth', 'pass', 'triggthediscover@gmail.com', 'u3.jpg', "harry is chill"), 
			 new User('PeterGoldman', 'pass', 'postman@famspam.net', 'u4.jpg', "peter has kewl hair"),
			 new User('TaylorFoxhall', 'pass', 'triggthediscovery@gmail.com', 'u5.jpg', "taylor knows things. Many things"),
			 new User('EmilyBernstien', 'pass', 'triggthediscovery@gmail.com', 'u6.jpg', "emily is here")];
			 
var sessionID = [];

sessionID.push(new SeidKey(12345678,'AdamNieto'));

//users[0].msubs.push(users[1]);
//users[0].msubs.push(users[2]);
users[0].msubs.push(users[3]);
//users[0].msubs.push(users[4]);
users[0].msubs.push(users[5]);
users[0].forwd.push(users[1]);
users[0].forwd.push(users[2]);
//users[0].forwd.push(users[3]);
users[0].forwd.push(users[4]);
//users[0].forwd.push(users[5]);

users[1].msubs.push(users[0]);
//users[1].msubs.push(users[1]);
//users[1].msubs.push(users[2]);
//users[1].msubs.push(users[3]);
users[1].msubs.push(users[4]);
//users[1].msubs.push(users[5]);
//users[1].forwd.push(users[1]);
//users[1].forwd.push(users[2]);
users[1].forwd.push(users[3]);
//users[1].forwd.push(users[4]);
users[1].forwd.push(users[5]);

users[2].msubs.push(users[0]);
//users[2].msubs.push(users[1]);
//users[2].msubs.push(users[2]);
users[2].msubs.push(users[3]);
//users[2].msubs.push(users[4]);
//users[2].msubs.push(users[5]);
//users[2].forwd.push(users[1]);
//users[2].forwd.push(users[2]);
//users[2].forwd.push(users[3]);
users[2].forwd.push(users[4]);
users[2].forwd.push(users[5]);

users[3].msubs.push(users[0]);
//users[3].msubs.push(users[1]);
users[3].msubs.push(users[2]);
//users[3].msubs.push(users[3]);
users[3].msubs.push(users[4]);
//users[3].msubs.push(users[5]);
//users[3].forwd.push(users[1]);
//users[3].forwd.push(users[2]);
//users[3].forwd.push(users[3]);
//users[3].forwd.push(users[4]);
//users[3].forwd.push(users[5]);

users[4].msubs.push(users[1]);
users[4].msubs.push(users[2]);
//users[4].msubs.push(users[3]);
//users[4].msubs.push(users[4]);
//users[4].msubs.push(users[5]);
//users[4].forwd.push(users[1]);
//users[4].forwd.push(users[2]);
users[4].forwd.push(users[3]);
//users[4].forwd.push(users[4]);
users[4].forwd.push(users[5]);

users[5].msubs.push(users[1]);
//users[5].msubs.push(users[2]);
users[5].msubs.push(users[3]);
//users[5].msubs.push(users[4]);
//users[5].msubs.push(users[5]);
//users[5].forwd.push(users[1]);
users[5].forwd.push(users[2]);
//users[5].forwd.push(users[3]);
users[5].forwd.push(users[4]);
//users[5].forwd.push(users[5]);

function SendTo(emailList) {
	var spawn = require('child_process').spawn,
		py    = spawn('python', ['famspam.py', users[0].email, users[1].email, users[2].email]),
		data = [1,2,3,4,5,6,7,8,9],
		dataString = '';

	py.stdout.on('data', function(data){
	  dataString += data.toString();
	});

	py.stdout.on('end', function(){
	  console.log('Sent to:',dataString);
	});

	py.stdin.write(JSON.stringify(data));
	py.stdin.end();
}

var get = '';
var valid=false;
var resp, returnp, rurl;


function NewFile(err, data) {
	if (err) {
        throw err; 
    }       
    console.log("here on " + rurl);
    valid = true;
    get = data;
    returnp();
}

function Paste() {
	resp.write(get);  
	resp.end();
}

function Upage() {
	var pos = rurl.search("upage") + 6;
	    	
	var un =  rurl.substr(pos);
	
	pos = un.search("/");

	un = un.substr(0,pos);

	var newpage = get.replace("uname",un);
	
	var info = findByName(un);
	
	if (info) {
		if (seid!=0) {
			
		}
	
		newpage = newpage.replace("msubs",info.msubs);
		newpage = newpage.replace("osubs",info.osubs);
		
		resp.write(newpage);  
		resp.end(); 
	} else {
		resp.write("404");
		resp.end();  
	}
}

function Upagejs() {
	var pos = rurl.search("upage") + 6;
	    	
	var un =  rurl.substr(pos);
	
	pos = un.search("/");

	un = un.substr(0,pos);

	var newpage = get.replace("uname",un);
	
	var info = findByName(un);

	if (info) {
		var msubs = "";
	
		for (i=0; i<info.msubs.length; i++) {
			var cr = findByKey(seid);
			
			
			cr = findByName(cr.uname);
			
			var out = 0;
			
			if (cr != false) {
				var gogo1 = findByNameArr(info.msubs[i].uname,cr.forwd);
				var gogo2 = findByNameArr(info.msubs[i].uname,cr.msubs);
				var gogo3 = findByNameArr(info.msubs[i].uname,cr.block);

				if (gogo1 != false) out=1;
				if (gogo2 != false) out=2;
				if (gogo3 != false) out=3;
			}
			
			msubs += ("new User('" + info.msubs[i].uname + "'," + out + ",'','" + info.msubs[i].image + "',''),");
		}
		
		var forwd = "";
	
		for (i=0; i<info.forwd.length; i++) {
			var cr = findByKey(seid);
			
			//console.log(cr.uname);
			
			cr = findByName(cr.uname);
			
			var out = 0;
			
			if (cr != false) {
				
			
				var gogo1 = findByNameArr(info.forwd[i].uname,cr.forwd);
				var gogo2 = findByNameArr(info.forwd[i].uname,cr.msubs);
				var gogo3 = findByNameArr(info.forwd[i].uname,cr.block);

				if (gogo1 != false) out=1;
				if (gogo2 != false) out=2;
				if (gogo3 != false) out=3;
				
				//console.log(out);
			}
			
			forwd += ("new User('" + info.forwd[i].uname + "'," + out + ",'','" + info.forwd[i].image + "',''),");
		}
		
		var cr = findByKey(seid);
		cr = findByName(cr.uname);
		
		var out = 0;
		
		if (cr != false) {
			var gogo1 = findByNameArr(info.uname,cr.forwd);
			var gogo2 = findByNameArr(info.uname,cr.msubs);
			var gogo3 = findByNameArr(info.uname,cr.block);

			if (gogo1 != false) out=1;
			if (gogo2 != false) out=2;
			if (gogo3 != false) out=3;
		}

		newpage = get.replace("abbbba","'" + cr.uname + "'");
		newpage = newpage.replace("123456789",msubs);
		newpage = newpage.replace("987654321",forwd);
		newpage = newpage.replace("11223344",'new User("' + un + '",' + out + ',"","' + info.image + '","' + info.descr + '");');
		
		resp.write(newpage);  
		resp.end();
	} else {
		resp.write("404");
		resp.end();  
	} 
}

function Homepagejs() {
	var msubs = "";
	var forwd = "";

	for (i=0; i<users.length; i++) {
		var cr = findByKey(seid);

		cr = findByName(cr.uname);
		
		var out = 0;
		
		if (cr != false) {
			var gogo1 = findByNameArr(users[i].uname,cr.forwd);
			var gogo2 = findByNameArr(users[i].uname,cr.msubs);
			var gogo3 = findByNameArr(users[i].uname,cr.block);

			if (gogo1 != false) out=1;
			if (gogo2 != false) out=2;
			if (gogo3 != false) out=3;
		}
		
		var d = Math.round(Math.random()*(users.length-1));
		
		msubs += ("new User('" + users[d].uname + "'," + out + ",'','" + users[d].image + "',''),");
		
		d = Math.round(Math.random()*(users.length-1));
		
		forwd += ("new User('" + users[d].uname + "'," + out + ",'','" + users[d].image + "',''),");
	}

	newpage = get.replace("123456789",msubs);
	newpage = newpage.replace("987654321",forwd);
	
	resp.write(newpage);  
	resp.end();
}

function Loginjs() {
	var pos = rurl.search("login");

	var un = rurl.substr(0,pos);
	
	var cr = findByKey(seid);
	cr = findByName(cr.uname);
	
	console.log(seid);

	if (seid==0) {
		var newpage = get.replace("ABCDEF","window.locationupage/JohnVanAtta.href");
	} else {
		var cr = findByKey(seid);

		cr = findByName(cr.uname);
	
		var newpage = get.replace("ABCDEF","window.location.href.substr(0,window.location.href-6) + 'upage/" + cr.uname + "/seid" + seid.toString() + "';");
		newpage = newpage.replace("var cid=0;","if (!window.location.href.includes('seid')) window.location.href = window.location.href.substr(0,window.location.href-6) + 'upage/" + cr.uname + "/seid" + seid.toString() + "';");
	}
	
	resp.write(newpage);  
	resp.end();
}

function cmailjs() {
	var pos = rurl.search("login");

	var un = rurl.substr(0,pos);
	
	var cr = findByKey(seid);

	cr = findByName(cr.uname);
	
	console.log(seid);

	newpage = get.replace("abbbba","'" + cr.uname + "'");
	resp.write(newpage);  
	resp.end();
}

var seid=0, lin, emailn="";

http.createServer(function(request, response) {
	if (request.method == 'POST') {
		var body = '';

        request.on('data', function (data) {
            body += data;

            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () {
        	var use = findByKey(parseInt(body.substr(0,8)));
        	use = findByName(use.uname);
        	
        	
        	//console.log(body);

        	if (use!=false) {
        		console.log(body);

        	
        		var rea = findByName(body.substr(11));
        	
        		if (body[9]=='1') {
        			use.forwd.push(rea);
        		} else if (body[9]=='2') {
        			use.msubs.push(rea);
        		} else if (body[9]=='3') {
        			use.block.push(rea);
        		} else if (body[9]=='4') {
        			for (i=0;i<use.forwd.length;i++) {
        				if (use.forwd[i]==rea) {
        					use.forwd.splice(i,1);
        				}
        			}
        		} else if (body[9]=='5') {
        			for (i=0;i<use.msubs.length;i++) {
        				if (use.msubs[i]==rea) {
        					use.msubs.splice(i,1);
        				}
        			}
        		} else if (body[9]=='6') {
        			for (i=0;i<use.block.length;i++) {
        				if (use.block[i]==rea) {
        					use.block.splice(i,1);
        				}
        			}
        		} 
    		} else if (body[0]=='u') {
    			//console.log("usen");
    			//console.log(body.substr(2));
    		
				lin = findByName(body.substr(2));
			} else if (body[0]=='p') {
				//console.log("pass");
				//console.log(lin.psswd);
				//console.log(body.substr(2));
			
				if (lin.psswd==body.substr(2)) {
					var cow = Math.random();
					cow = (cow-.01)*100000000;
					cow = Math.round(cow);
					
					sessionID.push(new SeidKey(cow,lin.uname));
					
					seid=cow;
					
					//console.log(seid);
				}
			} else if (body[0]=='f') {
				emailn = body.substr(2);
			} else if (body[0]=='e') {
				var cr = findByKey(seid);

				cr = findByName(cr.uname);
			
				var spawn = require('child_process').spawn;
				var recipients = [];
				
				var myeval = [cr];
				
				//console.log(cr);

				for (i=0;i<users.length;i++) {
					if (findByNameArr(cr.uname,users[i].forwd) != false) {
						
						//console.log(users[i]);
						if (findByNameArr(users[i].uname,recipients) == false) {
							//console.log(users[i]);
							recipients.push(users[i]);
						}
						myeval.push(users[i]);
					}
				}
				
				for (i=0;i<users.length;i++) {
					for (b=0;b<users[i].msubs.length;b++) {
						for (c=0;c<myeval.length;c++) {
							if (users[i].msubs[b] == myeval[c]) {
								//console.log(users[i].msubs[b]);
								if (findByNameArr(users[i].msubs[b].uname,recipients) == false) {
									//console.log(users[i].msubs[b]);
									recipients.push(users[i].msubs[b]);
								}
							}
						}
					}
				}
				
				for (i=0;i<recipients.length;i++) {
					if (findByNameArr(cr.uname,recipients[i].block) != false) {
						recipients[i]=null;
					}
				}
				
				var r2 = ['famspam.py', body.substr(2)];
				
				r2.push(cr.uname);
				
				r2.push(emailn);

				for (i=0;i<recipients.length;i++) {
					if (recipients[i].email!=null) r2.push(recipients[i].email);
				}
				
				console.log(r2);

				py    = spawn('python', r2),
				data = [1,2,3,4,5,6,7,8,9],
				dataString = '';

				py.stdout.on('data', function(data){
				  dataString += data.toString();
				});
				py.stdout.on('end', function(){
				  console.log('response: ',dataString);
				});
				py.stdin.write(JSON.stringify(data));
				py.stdin.end();
    		} else if (body[0]=='o') {
    			seid=0;
    		}
        });
	} else {
		resp=response;
	
		//console.log(request.url);
	
		//seid=0;

		if (request.url.includes("seid")) {
			var pos = request.url.search("seid");
		
			var hol = request.url.substr(pos+4,8);
		
			seid = parseInt(hol);
		
			request.url = request.url.replace("seid" + hol + "/", "");
		}
		
		

		//newpage = get.replace("123456789",msubs);
	
		rurl=request.url;

		returnp=Paste;

		//if (request.url==("/")) get=fs.readFileSync('./index.html', 'utf8');
		//if (request.url==("/cows")) get=fs.readFileSync('./cows.html', 'utf8');
		if (request.url.includes("/") && !request.url.includes("js")) {
			get=fs.readFileSync('./homepage.html', 'utf8');
		}
		if (request.url.includes("/homepage.js")) {
			get=fs.readFileSync('./homepage.js', 'utf8');
			returnp=Homepagejs;
		}
		if (request.url.includes("/login") && !request.url.includes("js")) {
			get=fs.readFileSync('./login.html', 'utf8');
		}
		if (request.url.includes("/login.js")) {
			get=fs.readFileSync('./login.js', 'utf8');
			returnp=Loginjs;
		}
		if (request.url.includes("/cmail") && !request.url.includes("js")) {
			get=fs.readFileSync('./cmail.html', 'utf8');
		}
		if (request.url.includes("/cmail.js")) {
			get=fs.readFileSync('./cmail.js', 'utf8');
			returnp=cmailjs;
		}
		if (request.url.includes("/upage.js")) {
			get=fs.readFileSync('./upage.js', 'utf8');
			returnp=Upagejs;
		}
		if (request.url.includes("/main.js")) get=fs.readFileSync('./main.js', 'utf8');
		if (request.url.includes("/upage/") && !request.url.includes("/upage.js") && !request.url.includes(".jpg")) {
			get=fs.readFileSync('./upage.html', 'utf8');
			returnp=Upage;
		}
		if (request.url.includes("/lib/w3.css")) get=fs.readFileSync('./w3.css');
		if (request.url.includes(".jpg")) {
			var c = request.url.lastIndexOf("/")+1;
		
			var fn = "./" + request.url.substr(c);
			
			//console.log(fn);
		
			get=fs.readFileSync(fn);
			response.writeHead(200, {'Content-Type': 'image/jpg' });
			response.end(get, 'binary');
			
			returnp = function(){};
		}
		if (request.url.includes(".png")) {
			var c = request.url.lastIndexOf("/")+1;
		
			var fn = "./" + request.url.substr(c);
			
			//console.log(fn);
		
			get=fs.readFileSync(fn);
			response.writeHead(200, {'Content-Type': 'image/png' });
			response.end(get, 'binary');
			
			returnp = function(){};
		}
		
		returnp();
	}
}).listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
