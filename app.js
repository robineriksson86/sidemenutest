var data = {
  "main": [
  47,
  54,
  33
  ],
  "menu": [
  {
    "id": 47,
    "name": "Mobiilne kasiino",
    "title": "Mobiilne kasiino",
    "icon": "mobilecasino_icon.svg",
    "sub": [
    {
      "id": 48,
      "name": "Mobiilne Maria Casino",
      "title": null,
      "icon": null,
      "href": "/mobiilne-maria-casino",
      "thumb": "maria-mobile_thumb_117x76.jpg",
      "postcard": null
    },
    {
      "id": 49,
      "name": "Mobiilne OlyBet",
      "title": null,
      "icon": null,
      "href": "/mobiilne-olybet",
      "thumb": "olybet-app_thumb_117x76.jpg",
      "postcard": null
    },
    {
      "id": 50,
      "name": "Mobiilne Paf",
      "title": "Mobiilne Paf",
      "icon": null,
      "href": "/mobiilne-paf",
      "thumb": "paf-mobile_thumb_117x76.jpg",
      "postcard": null
    },
    {
      "id": 51,
      "name": "Mobiilne Tonybet",
      "title": null,
      "icon": null,
      "href": "/mobiilne-tonybet",
      "thumb": "tonybet_thumb_117x76.png",
      "postcard": null
    },
    {
      "id": 52,
      "name": "Mobiilne Triobet",
      "title": "Mobiilne Triobet",
      "icon": null,
      "href": "/mobiilne-triobet",
      "thumb": "triobet-mobiil_thumb_117x76.jpg",
      "postcard": null
    },
    {
      "id": 53,
      "name": "Mobiilne Unibet",
      "title": null,
      "icon": null,
      "href": "/mobiilne-unibet",
      "thumb": "unibet_thumb_117x76.jpg",
      "postcard": null
    }
    ],
    "priority": 2
  },
  {
    "id": 54,
    "name": "Spordiennustus",
    "title": null,
    "icon": "natcasinon.svg",
    "sub": [
    {
      "id": 55,
      "name": "Paf spordiennustus",
      "title": "Paf spordiennustus",
      "icon": null,
      "href": "/paf-spordiennustus",
      "thumb": "paf-sports-bet_thumb_117x76.jpg",
      "postcard": null
    },
    {
      "id": 56,
      "name": "Olybet spordiennustus",
      "title": "Olybet spordiennustus",
      "icon": null,
      "href": "/olybet-spordiennustus",
      "thumb": "olybet-spordi_thumb_117x76.jpg",
      "postcard": null
    },
    {
      "id": 57,
      "name": "Optibet spordiennustus",
      "title": "Optibet spordiennustus",
      "icon": null,
      "href": "/optibet-spordiennustus",
      "thumb": "optibet-soccer_thumb_117x76.jpg",
      "postcard": null
    },
    {
      "id": 58,
      "name": "Triobeti spordiennustus",
      "title": "Triobeti spordiennustus",
      "icon": null,
      "href": "/triobet-spordiennustus",
      "thumb": null,
      "postcard": null
    },
    {
      "id": 59,
      "name": "Unibet spordiennustus",
      "title": "Unibet spordiennustus",
      "icon": null,
      "href": "/unibet-spordiennustus",
      "thumb": "unibet-sports_thumb_117x76.jpg",
      "postcard": null
    },
    {
      "id": 60,
      "name": "TonyBet",
      "title": "TonyBet",
      "icon": null,
      "href": "/tonybet-spordiennustus",
      "thumb": "tonybet_thumb_117x76.png",
      "postcard": "tonybet_postcard_400x210.jpg"
    }
    ],
    "priority": 3
  },
  {
    "id": 33,
    "name": "Kasiinoboonused",
    "title": "Online kasiino boonused",
    "icon": "casino-bonus_icon.svg",
    "sub": [
    {
      "id": 34,
      "name": "Tervitusboonus",
      "title": null,
      "icon": "",
      "href": "/tervitusboonus",
      "thumb": "coins_thumb.jpg",
      "postcard": null,
      "sub_type": ""
    },
    {
      "id": 35,
      "name": "Sissemakse boonus",
      "title": null,
      "icon": "",
      "href": "/sissemakse-boonus",
      "thumb": "first-deposit-bonus-thumb-ee-v2_thumb_117x76.jpg",
      "postcard": null,
      "sub_type": ""
    },
    {
      "id": 36,
      "name": "Sissemakseta boonused",
      "title": "Sissemakseta boonused",
      "icon": "",
      "href": "/sissemakseta-boonused",
      "thumb": "bonuswithout-deposit_thumb_117x76.jpg",
      "postcard": null,
      "sub_type": ""
    },
    {
      "id": 37,
      "name": "Taaslaadimisboonus",
      "title": null,
      "icon": "",
      "href": "/taaslaadimisboonus",
      "thumb": "reload-bonus_thumb_117x76.jpg",
      "postcard": null,
      "sub_type": ""
    }
    ],
    "priority": 1
  }
  ]
}


function openNav1() {
  var b = document.getElementById("mySidenavFirst").children;
  if(b.length>=2){
  }else{
    navLinks();
  }

  document.getElementById("mySidenavFirst").style.width = "250px";
}

function openNav2(a) {
  var i;
  var p;
  var z;
  for(i=0; i<data.menu.length; i++){

    if(a == data.menu[i].name && document.getElementsByClassName("subLinks").length == 0){
      for(p=0; p<data.menu[i].sub.length; p++){
        if(data.menu[i].sub[p].thumb == null){
          var placeHolder = document.createElement("div");
          placeHolder.setAttribute("style", "padding-right: 53px; display:inline");
          var placeHolderText = document.createTextNode(" ");
          placeHolder.appendChild(placeHolderText);
          document.getElementById("mySidenavSecond").appendChild(placeHolder); 
        }else{
         var img = document.createElement("img");
         img.setAttribute("src", data.menu[i].sub[p].thumb);
         img.setAttribute("style", "width: 50px");
         document.getElementById("mySidenavSecond").appendChild(img);
       }
       var link = document.createElement("a");
       link.setAttribute("class", "subLinks")
       link.setAttribute("href", data.menu[i].sub[p].href)
       var text = document.createTextNode(" "+data.menu[i].sub[p].name);
       link.appendChild(text);
       document.getElementById("mySidenavSecond").appendChild(link); 
       var linebreak = document.createElement("br"); 
       document.getElementById("mySidenavSecond").appendChild(linebreak);
     }
       
   }

 }
  makeBackArrow();
   document.getElementById("mySidenavSecond").style.width = "250px";
}

function navLinks(){
	var i;
	var arrow = ' \u25BA';
	for(i=0; i<data.menu.length; i++){
		var div = document.createElement("a");
		var text = document.createTextNode(data.menu[i].name + arrow);
    div.setAttribute("checker", data.menu[i].name);
    div.setAttribute("onclick", "openNav2(this.getAttribute('checker'))");
    div.appendChild(text);
    document.getElementById("mySidenavFirst").appendChild(div);
  }
}

function closeNav() {
  document.getElementById("mySidenavSecond").style.width = "0";
  document.getElementById("mySidenavFirst").style.width = "0";
}
function makeBackArrow(){
  var backarrow = ' \u25C4';
  var link2 = document.createElement("a");
       link2.setAttribute("id", "backarrow")
       link2.setAttribute("onclick", "removeNav2()");
       var text2 = document.createTextNode(backarrow + " Back");
       link2.appendChild(text2);
       document.getElementById("mySidenavSecond").appendChild(link2);
}

function removeNav2(){
var f;
var checkSubNav = document.getElementById("mySidenavSecond");
if(document.getElementsByClassName("subLinks").length == 0){
  openNav2();
}else{
  while(checkSubNav.hasChildNodes()){
    checkSubNav.removeChild(checkSubNav.childNodes[0]);
    document.getElementById("mySidenavSecond").style.width = "0";
  }
    
}

}