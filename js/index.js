(function () {
	var meta = document.getElementsByTagName('meta')[1];
	var scaleSize = document.body.offsetWidth / 520;
	meta.content = "width=device-width, initial-scale=" +
	scaleSize + ", maximum-scale=" + scaleSize + ", user-scalable=0";
	InitChangeImg();
}())