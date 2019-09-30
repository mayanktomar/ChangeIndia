
// (function (global) {

// var dc = {};

// var aa = "farmer1.html";

// var insertHtml = function (selector, html) {
//   var targetElem = document.querySelector(selector);
//   targetElem.innerHTML = html.responseText;
// };

// var showLoading = function (selector) {
//   var html = "<div class='text-center'>";
//   html += "<img src='images/ajax-loader.gif'></div>";
//   insertHtml(selector, html);
// };

// // function myFunction() {
// //   insertHtml("#a1",aa);
// // }

// document.addEventListener("DOMContentLoaded", function (event) {
// showLoading("#a1");
// $ajaxUtils.sendGetRequest(
//   aa,
//   function (responseText) {
//     document.querySelector("#a1")
//       .innerHTML = responseText;
//     document.getElementById("temp").style.background-color="black";
//   },
//   false);
// });

// global.$dc = dc;

// })(window);
var temp="farmer2.html";
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("a1").innerHTML = this.responseText;

    }
  };
  xhttp.open("GET", "farmer2.html", true);
  xhttp.send();
  
}
function loadDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("a1").innerHTML = this.responseText;

    }
  };
  xhttp.open("GET", "farmer1.html", true);
  xhttp.send();
  
}
function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("a1").innerHTML = this.responseText;

    }
  };
  xhttp.open("GET", "farmer3.html", true);
  xhttp.send();
  
}
function loadEdu1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("a2").innerHTML = this.responseText;

    }
  };
  xhttp.open("GET", "education1.html", true);
  xhttp.send();
  
}
function loadEdu2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("a2").innerHTML = this.responseText;

    }
  };
  xhttp.open("GET", "education2.html", true);
  xhttp.send();
  
}
function loadEdu3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("a2").innerHTML = this.responseText;

    }
  };
  xhttp.open("GET", "education3.html", true);
  xhttp.send();
  
}
function loadPoll1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("a3").innerHTML = this.responseText;

    }
  };
  xhttp.open("GET", "pollution1.html", true);
  xhttp.send();
  
}
function loadPoll2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("a3").innerHTML = this.responseText;

    }
  };
  xhttp.open("GET", "pollution2.html", true);
  xhttp.send();
  
}
function loadPoll3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("a3").innerHTML = this.responseText;

    }
  };
  xhttp.open("GET", "pollution3.html", true);
  xhttp.send();
  
}


function loadHea1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("a4").innerHTML = this.responseText;

    }
  };
  xhttp.open("GET", "health1.html", true);
  xhttp.send();
  
}

function loadHea2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("a4").innerHTML = this.responseText;

    }
  };
  xhttp.open("GET", "health2.html", true);
  xhttp.send();
  
}
function loadHea3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("a4").innerHTML = this.responseText;

    }
  };
  xhttp.open("GET", "health3.html", true);
  xhttp.send();
  
}
