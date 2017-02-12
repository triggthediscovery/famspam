var seid=0;

if (window.location.href.includes("seid")) {
	var pos = window.location.href.search("seid");

	var hol = window.location.href.substr(pos+4,8);

	seid = parseInt(hol);
}

var cid=0;

var post = "";

if (seid==0) {
	document.getElementById("logger").innerHTML = "Login";
	
	document.getElementById("logger").addEventListener("click", function() {
		var base = window.location.href.lastIndexOf("upage");
		var urs = window.location.href.substr(0,base+6);
	
		window.location = urs.substr(0,urs.length-6) + "login";
	});
} else {
	document.getElementById("logger").innerHTML = "Logout";
	
	document.getElementById("logger").addEventListener("click", function() {
		var base = window.location.href.lastIndexOf("upage");
		var urs = window.location.href.substr(0,base+6);
		
		post = "o";
		Goto();
	
		window.location = urs + pageu.uname + "/";
	}); 
}

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

document.getElementById("homep").addEventListener("click", function() {
	var base = window.location.href.lastIndexOf("cmail");
	var urs = window.location.href.substr(0,base);

	window.location = urs + "upage/" + abbbba + '/seid' + seid.toString();
});

document.getElementById("trigger").addEventListener("click", function() {
	console.log(document.getElementById("text").value);

	post="e ";
	post+=document.getElementById("text").value;
	Goto();

	//location.reload();
}); 
