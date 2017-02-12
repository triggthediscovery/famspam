var cid=0;

var User = {
  id: 0,
  uname: '',
  relat: 0,
  email: '',
  image: '',
  descr: '',
  forwd: [],
  msubs: [],
  osubs: [],
  block: []
};

var User = function User(uname, relat, email, image, descr){
    this.constructor;
    this.id = cid;
    
    cid++;
    
	this.uname = uname;
	this.relat = relat;
	this.email = email;
	this.image = image;
	this.descr = descr;
	this.forwd = [];
	this.msubs = [];
	this.osubs = [];
	this.block = [];
}

var subs = [123456789];
var subd = [987654321];

var place1=0;
var place2=0;

var seid=0;

if (window.location.href.includes("seid")) {
	var pos = window.location.href.search("seid");

	var hol = window.location.href.substr(pos+4,8);

	seid = parseInt(hol);
}

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

document.getElementById("cmail").addEventListener("click", function() {
	var base = window.location.href.lastIndexOf("upage");
	var urs = window.location.href.substr(0,base);

	if (seid!=0) window.location = urs + 'cmail/seid' + seid.toString();
});

function update() { 
	if (place1<0) place1=0;
	if (place2<0) place2=0;

	if (subs.length-place1>0) {
		document.getElementById("pic1").src = subs[0+place1].image;
		document.getElementById("name1").innerHTML = subs[0+place1].uname;
	} else {
		document.getElementById("pic1").src = "empty.png";
		document.getElementById("name1").innerHTML = "_";
	}
	if (subs.length-place1>1) {
		document.getElementById("pic2").src = subs[1+place1].image;
		document.getElementById("name2").innerHTML = subs[1+place1].uname;
	} else {
		document.getElementById("pic2").src = "empty.png";
		document.getElementById("name2").innerHTML = "_";
	} 
	if (subs.length-place1>2) {
		document.getElementById("pic3").src = subs[2+place1].image;
		document.getElementById("name3").innerHTML = subs[2+place1].uname;
	} else {
		document.getElementById("pic3").src = "empty.png";
		document.getElementById("name3").innerHTML = "_";
	} 
	if (subs.length-place1>3) {
		document.getElementById("pic4").src = subs[3+place1].image;
		document.getElementById("name4").innerHTML = subs[3+place1].uname;
	} else {
		document.getElementById("pic4").src = "empty.png";
		document.getElementById("name4").innerHTML = "_";
	}

	if (subd.length-place2>0) {
		document.getElementById("pic5").src = subd[0+place2].image;
		document.getElementById("name5").innerHTML = subd[0+place2].uname;
	} else {
		document.getElementById("pic5").src = "empty.png";
		document.getElementById("name5").innerHTML = "_";
	} 
	if (subd.length-place2>1) {
		document.getElementById("pic6").src = subd[1+place2].image;
		document.getElementById("name6").innerHTML = subd[1+place2].uname;
	} else {
		document.getElementById("pic6").src = "empty.png";
		document.getElementById("name6").innerHTML = "_";
	} 
	if (subd.length-place2>2) {
		document.getElementById("pic7").src = subd[2+place2].image;
		document.getElementById("name7").innerHTML = subd[2+place2].uname;
	} else {
		document.getElementById("pic7").src = "empty.png";
		document.getElementById("name7").innerHTML = "_";
	} 
	if (subd.length-place2>3) {
		document.getElementById("pic8").src = subd[3+place2].image;
		document.getElementById("name8").innerHTML = subd[3+place2].uname;
	} else {
		document.getElementById("pic8").src = "empty.png";
		document.getElementById("name8").innerHTML = "_";
	}
}

update();

document.getElementById("phome").addEventListener("click", function() {
	window.location = urs + abbbba + '/seid' + seid.toString();
});

document.getElementById("tl").addEventListener("click", function() {
	place1--; update();
}); 
document.getElementById("tr").addEventListener("click", function() {
	place1++; update();
}); 

document.getElementById("bl").addEventListener("click", function() {
	place2--; update();
}); 
document.getElementById("br").addEventListener("click", function() {
	place2++; update();
}); 

var base = window.location.href.lastIndexOf("upage");

var urs = window.location.href.substr(0,base+6) + "/upage/";

document.getElementById("pic1").addEventListener("click", function() {
	window.location = urs + subs[0+place1].uname + '/seid' + seid.toString();
}); 
document.getElementById("pic2").addEventListener("click", function() {
	window.location = urs + subs[1+place1].uname + '/seid' + seid.toString();
}); 
document.getElementById("pic3").addEventListener("click", function() {
	window.location = urs + subs[2+place1].uname + '/seid' + seid.toString();
}); 
document.getElementById("pic4").addEventListener("click", function() {
	window.location = urs + subs[3+place1].uname + '/seid' + seid.toString();
}); 

document.getElementById("pic5").addEventListener("click", function() {
	window.location = urs + subd[0+place2].uname + '/seid' + seid.toString();
}); 
document.getElementById("pic6").addEventListener("click", function() {
	window.location = urs + subd[1+place2].uname + '/seid' + seid.toString();
}); 
document.getElementById("pic7").addEventListener("click", function() {
	window.location = urs + subd[2+place2].uname + '/seid' + seid.toString();
}); 
document.getElementById("pic8").addEventListener("click", function() {
	window.location = urs + subd[3+place2].uname + '/seid' + seid.toString();
}); 

var post = "";

function MakePost(id, num, name) {
	post = "";
	post+=id;
	post+=" " + num.toString() + " ";
	post+=name;
	Goto();
}

function GodHelp(n1, n2, n3, ob) {
	if (typeof(ob) == "undefined") {
		document.getElementById(n1).className=document.getElementById(n1).className.replace("w3-white","w3-black");
		document.getElementById(n2).className=document.getElementById(n2).className.replace("w3-white","w3-black");
		document.getElementById(n3).className=document.getElementById(n3).className.replace("w3-white","w3-black");
	
		return;
	}

	if (ob.relat==1) {
		document.getElementById(n1).className=document.getElementById(n1).className.replace("w3-black","w3-white");
		document.getElementById(n2).className=document.getElementById(n2).className.replace("w3-white","w3-black");
		document.getElementById(n3).className=document.getElementById(n3).className.replace("w3-white","w3-black");
	} else if (ob.relat==2) {
		document.getElementById(n1).className=document.getElementById(n1).className.replace("w3-white","w3-black");
		document.getElementById(n2).className=document.getElementById(n2).className.replace("w3-black","w3-white");
		document.getElementById(n3).className=document.getElementById(n3).className.replace("w3-white","w3-black");
	} else if (ob.relat==3) {
		document.getElementById(n1).className=document.getElementById(n1).className.replace("w3-white","w3-black");
		document.getElementById(n2).className=document.getElementById(n2).className.replace("w3-white","w3-black");
		document.getElementById(n3).className=document.getElementById(n3).className.replace("w3-black","w3-white");
	} else if (ob.relat==0) {
		document.getElementById(n1).className=document.getElementById(n1).className.replace("w3-white","w3-black");
		document.getElementById(n2).className=document.getElementById(n2).className.replace("w3-white","w3-black");
		document.getElementById(n3).className=document.getElementById(n3).className.replace("w3-white","w3-black");
	}
}
GodHelp("f1","s1","b1",subs[0+place1]);
GodHelp("f2","s2","b2",subs[1+place1]);
GodHelp("f3","s3","b3",subs[2+place1]);
GodHelp("f4","s4","b4",subs[3+place1]);
GodHelp("f5","s5","b5",subd[0+place2]);
GodHelp("f6","s6","b6",subd[1+place2]);
GodHelp("f7","s7","b7",subd[2+place2]);
GodHelp("f8","s8","b8",subd[3+place2]);

if (seid!=0) {
	document.getElementById("f0").addEventListener("click", function() {
		if (pageu.relat != 1) {
			MakePost(seid.toString(),1,pageu.uname);
			MakePost(seid.toString(),pageu.relat+3,pageu.uname);
		} else {
			MakePost(seid.toString(),4,pageu.uname);
		}
		
		location.reload();
	}); 
	document.getElementById("s0").addEventListener("click", function() {
		if (pageu.relat != 2) {
			MakePost(seid.toString(),2,pageu.uname);
			MakePost(seid.toString(),pageu.relat+3,pageu.uname);
		} else {
			MakePost(seid.toString(),5,pageu.uname);
		}
		
		location.reload();
	}); 
	document.getElementById("b0").addEventListener("click", function() {
		if (pageu.relat != 3) {
			MakePost(seid.toString(),3,pageu.uname);
			MakePost(seid.toString(),pageu.relat+3,pageu.uname);
		} else {
			MakePost(seid.toString(),6,pageu.uname);
		}
		
		location.reload();
	});

	document.getElementById("f1").addEventListener("click", function() {
		if (subs[0+place1].relat != 1) {
			MakePost(seid.toString(),1,subs[0+place1].uname);
			MakePost(seid.toString(),(subs[0+place1].relat+3),subs[0+place1].uname);
		} else {
			MakePost(seid.toString(),4,subs[0+place1].uname);
		}
		
		location.reload();
	}); 
	document.getElementById("s1").addEventListener("click", function() {
		if (subs[0+place1].relat != 2) {
			MakePost(seid.toString(),2,subs[0+place1].uname);
			MakePost(seid.toString(),subs[0+place1].relat+3,subs[0+place1].uname);
		} else {
			MakePost(seid.toString(),5,subs[0+place1].uname);
		}
		
		location.reload();
	}); 
	document.getElementById("b1").addEventListener("click", function() {
		if (subs[0+place1].relat != 3) {
			MakePost(seid.toString(),3,subs[0+place1].uname);
			MakePost(seid.toString(),subs[0+place1].relat+3,subs[0+place1].uname);
		} else {
			MakePost(seid.toString(),6,subs[0+place1].uname);
		}
		
		location.reload();
	});

	document.getElementById("f2").addEventListener("click", function() {
		if (subs[1+place1].relat != 1) {
			MakePost(seid.toString(),1,subs[1+place1].uname);
			MakePost(seid.toString(),subs[1+place1].relat+3,subs[1+place1].uname);
		} else {
			MakePost(seid.toString(),4,subs[1+place1].uname);
		}
		
		location.reload();
	}); 
	document.getElementById("s2").addEventListener("click", function() {
		if (subs[1+place1].relat != 2) {
			MakePost(seid.toString(),2,subs[1+place1].uname);
			MakePost(seid.toString(),subs[1+place1].relat+3,subs[1+place1].uname);
		} else {
			MakePost(seid.toString(),5,subs[1+place1].uname);
		}
		
		location.reload();
	}); 
	document.getElementById("b2").addEventListener("click", function() {
		if (subs[1+place1].relat != 3) {
			MakePost(seid.toString(),3,subs[1+place1].uname);
			MakePost(seid.toString(),subs[1+place1].relat+3,subs[1+place1].uname);
		} else {
			MakePost(seid.toString(),6,subs[1+place1].uname);
		}
		
		location.reload();
	});

	document.getElementById("f3").addEventListener("click", function() {
		if (subs[2+place1].relat != 1) {
			MakePost(seid.toString(),1,subs[2+place1].uname);
			MakePost(seid.toString(),subs[2+place1].relat+3,subs[2+place1].uname);
		} else {
			MakePost(seid.toString(),4,subs[2+place1].uname);
		}
		
		location.reload();
	}); 
	document.getElementById("s3").addEventListener("click", function() {
		if (subs[2+place1].relat != 2) {
			MakePost(seid.toString(),2,subs[2+place1].uname);
			MakePost(seid.toString(),subs[2+place1].relat+3,subs[2+place1].uname);
		} else {
			MakePost(seid.toString(),5,subs[2+place1].uname);
		}
		
		location.reload();
	}); 
	document.getElementById("b3").addEventListener("click", function() {
		if (subs[2+place1].relat != 3) {
			MakePost(seid.toString(),3,subs[2+place1].uname);
			MakePost(seid.toString(),subs[2+place1].relat+3,subs[2+place1].uname);
		} else {
			MakePost(seid.toString(),6,subs[2+place1].uname);
		}
		
		location.reload();
	});
	
	document.getElementById("f4").addEventListener("click", function() {
		if (subs[3+place1].relat != 1) {
			MakePost(seid.toString(),1,subs[3+place1].uname);
			MakePost(seid.toString(),subs[3+place1].relat+3,subs[3+place1].uname);
		} else {
			MakePost(seid.toString(),4,subs[3+place1].uname);
		}
		
		location.reload();
	}); 
	document.getElementById("s4").addEventListener("click", function() {
		if (subs[3+place1].relat != 2) {
			MakePost(seid.toString(),2,subs[3+place1].uname);
			MakePost(seid.toString(),subs[3+place1].relat+3,subs[3+place1].uname);
		} else {
			MakePost(seid.toString(),5,subs[3+place1].uname);
		}
		
		location.reload();
	}); 
	document.getElementById("b4").addEventListener("click", function() {
		if (subs[3+place1].relat != 3) {
			MakePost(seid.toString(),3,subs[3+place1].uname);
			MakePost(seid.toString(),subs[3+place1].relat+3,subs[3+place1].uname);
		} else {
			MakePost(seid.toString(),6,subs[3+place1].uname);
		}
		
		location.reload();
	});
	
	document.getElementById("f5").addEventListener("click", function() {
		if (subd[0+place2].relat != 1) {
			MakePost(seid.toString(),1,subd[0+place2].uname);
			MakePost(seid.toString(),subd[0+place2].relat+3,subd[0+place2].uname);
		} else {
			MakePost(seid.toString(),4,subd[0+place2].uname);
		}
		
		location.reload();
	}); 
	document.getElementById("s5").addEventListener("click", function() {
		if (subd[0+place2].relat != 2) {
			MakePost(seid.toString(),2,subd[0+place2].uname);
			MakePost(seid.toString(),subd[0+place2].relat+3,subd[0+place2].uname);
		} else {
			MakePost(seid.toString(),5,subd[0+place2].uname);
		}
		
		location.reload();
	}); 
	document.getElementById("b5").addEventListener("click", function() {
		if (subd[0+place2].relat != 3) {
			MakePost(seid.toString(),3,subd[0+place2].uname);
			MakePost(seid.toString(),subd[0+place2].relat+3,subd[0+place2].uname);
		} else {
			MakePost(seid.toString(),6,subd[0+place2].uname);
		}
	});

	document.getElementById("f6").addEventListener("click", function() {
		if (subd[1+place2].relat != 1) {
			MakePost(seid.toString(),1,subd[1+place2].uname);
			MakePost(seid.toString(),subd[1+place2].relat+3,subd[1+place2].uname);
		} else {
			MakePost(seid.toString(),4,subd[1+place2].uname);
		}
		
		location.reload();
	}); 
	document.getElementById("s6").addEventListener("click", function() {
		if (subd[1+place2].relat != 2) {
			MakePost(seid.toString(),2,subd[1+place2].uname);
			MakePost(seid.toString(),subd[1+place2].relat+3,subd[1+place2].uname);
		} else {
			MakePost(seid.toString(),5,subd[1+place2].uname);
		}
		
		location.reload();
	}); 
	document.getElementById("b6").addEventListener("click", function() {
		if (subd[1+place2].relat != 3) {
			MakePost(seid.toString(),3,subd[1+place2].uname);
			MakePost(seid.toString(),subd[1+place2].relat+3,subd[1+place2].uname);
		} else {
			MakePost(seid.toString(),6,subd[1+place2].uname);
		}
		
		location.reload();
	});

	document.getElementById("f7").addEventListener("click", function() {
		if (subd[2+place2].relat != 1) {
			MakePost(seid.toString(),1,subd[2+place2].uname);
			MakePost(seid.toString(),subd[2+place2].relat+3,subd[2+place2].uname);
		} else {
			MakePost(seid.toString(),4,subd[2+place2].uname);
		}
		
		location.reload();
	}); 
	document.getElementById("s7").addEventListener("click", function() {
		if (subd[2+place2].relat != 2) {
			MakePost(seid.toString(),2,subd[2+place2].uname);
			MakePost(seid.toString(),subd[2+place2].relat+3,subd[2+place2].uname);
		} else {
			MakePost(seid.toString(),5,subd[2+place2].uname);
		}
		
		location.reload();
	}); 
	document.getElementById("b7").addEventListener("click", function() {
		if (subd[2+place2].relat != 3) {
			MakePost(seid.toString(),3,subd[2+place2].uname);
			MakePost(seid.toString(),subd[2+place2].relat+3,subd[2+place2].uname);
		} else {
			MakePost(seid.toString(),6,subd[2+place2].uname);
		}
		
		location.reload();
	});
	
	document.getElementById("f8").addEventListener("click", function() {
		if (subd[3+place2].relat != 1) {
			MakePost(seid.toString(),1,subd[3+place2].uname);
			MakePost(seid.toString(),subd[3+place2].relat+3,subd[3+place2].uname);
		} else {
			MakePost(seid.toString(),4,subd[3+place2].uname);
		}
		
		location.reload();
	}); 
	document.getElementById("s8").addEventListener("click", function() {
		if (subd[3+place2].relat != 2) {
			MakePost(seid.toString(),2,subd[3+place2].uname);
			MakePost(seid.toString(),subd[3+place2].relat+3,subd[3+place2].uname);
		} else {
			MakePost(seid.toString(),5,subd[3+place2].uname);
		}
		
		location.reload();
	}); 
	document.getElementById("b8").addEventListener("click", function() {
		if (subd[3+place2].relat != 3) {
			MakePost(seid.toString(),3,subd[3+place2].uname);
			MakePost(seid.toString(),subd[3+place2].relat+3,subd[3+place2].uname);
		} else {
			MakePost(seid.toString(),6,subd[3+place2].uname);
		}
		
		location.reload();
	});
}

function Goto() {
	if (post!="") {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", window.location.href, true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(post);//JSON.stringify({name: "hello from js!"})
	}
}


