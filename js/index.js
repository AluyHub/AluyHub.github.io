(function () {
	var meta = document.getElementsByTagName('meta')[1];
	meta.content = "width=device-width, initial-scale=" + 
	document.body.offsetWidth / 520 + ", maximum-scale=" + 
	document.body.offsetWidth / 520 + ", user-scalable=no";
	InitChangeImg();
}())