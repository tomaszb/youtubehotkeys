//Bind Youtube Playlist page to Addon
var bind = document.getElementById("bind");
bind.addEventListener('click', function click(event) {
	self.port.emit('bind_now');
}, false);
 
//Goes to next song on the Youtube Playlist
var next = document.getElementById("next");
next.addEventListener('click', function click(event){
	self.port.emit('next');
}, false);

//Goes to previous song on the Youtube Playlist
var last = document.getElementById("last");
last.addEventListener('click', function click(event){
	self.port.emit('last');
}, false);