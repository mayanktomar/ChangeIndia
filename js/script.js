
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