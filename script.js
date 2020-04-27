window.onload = function() {
	var down = document.getElementById('download');
	var num = -100;
	var timer = setInterval(function() {
		if(num >= -100) {
			num++;
		}
		down.style.top = num + "px";
		console.log(num);
	}, 10);
	setInterval(function() {
		clearInterval(timer);
	},1000);
}
