var bind = document.getElementById("bind");
bind.addEventListener('click', function click(event) {
	self.port.emit('bind_now');
}, false);
 

var next = document.getElementById("next");
next.addEventListener('click', function click(event){
	self.port.emit('next');
}, false);

var last = document.getElementById("last");
next.addEventListener('click', function click(event){
	self.port.emit('last');
}, false);