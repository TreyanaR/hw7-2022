var video = document.getElementById('player1');


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
document.getElementsByClassName('video').addEventListener("load", function() {
	removeAttribute('autoplay');
});


 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
 });
