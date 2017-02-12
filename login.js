var seid=0;

if (window.location.href.includes("seid")) {
	var pos = window.location.href.search("seid");

	var hol = window.location.href.substr(pos+4,8);

	seid = parseInt(hol);
}

var cid=0;

var post = "";

function MakePost(id, num, name) {
	post = "";
	post+=id;
	post+=" " + num.toString() + " ";
	post+=name;
	Goto();
}

function Goto() {
	if (post!="") {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", window.location.href, true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(post);
	}
}

document.getElementById("phome").addEventListener("click", function() {
	window.location = ABCDEF;
});

document.getElementById("cmail").addEventListener("click", function() {
	var base = window.location.href.lastIndexOf("login");
	var urs = window.location.href.substr(0,base);
	
	if (seid!=0) window.location = urs + 'cmail/seid' + seid.toString();
});

document.getElementById("trigger").addEventListener("click", function() {
	console.log(document.getElementById("username").value);
	console.log(document.getElementById("password").value);
	console.log("hello");

	post="u ";
	post+=document.getElementById("username").value;
	Goto();
	
	post="p ";
	post+=document.getElementById("password").value;
	Goto();
	
	//location.reload();
}); 
