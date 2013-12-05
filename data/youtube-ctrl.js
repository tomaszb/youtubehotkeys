self.port.on("next", function(){
	document.getElementById('watch7-playlist-bar-next-button').click();
});

self.port.on("last", function(){
	document.getElementById("watch7-playlist-bar-prev-button").click();
});