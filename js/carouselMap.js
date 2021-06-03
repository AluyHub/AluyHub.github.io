var InitChangeImg =(function () {
	var carouselBox = document.getElementsByClassName('carouselBox')[0];
	var imgContain = document.getElementsByClassName('imgContent')[0]; // Img slider box
	var index = 1;
	var timer = null; //Animation completion timer
	var changeImg = null; //Switch picture timer
	var key = true; // Animation lock
	var isMoving = false; // Animation change lock
	var btnList = document.getElementsByClassName('btnList')[0];
	var leftBtn = document.getElementsByClassName('leftControl')[0];
	var rightBtn = document.getElementsByClassName('rightControl')[0];
	var len = imgContain.children.length; //Picture total
	var imgWidth = parseInt(getComputedStyle(imgContain.children[0],null).width); // Width of a single picture

	// Init
	imgContain.style.width = len * imgWidth +'px';
	imgContain.style.left = -1 * imgWidth + 'px';
	document.onmousedown =	document.oncontextmenu = function (e) { // Block default events
		var event = e || window.event; //Event compatibility
		event.preventDefault();
	}
	window.ontouchstart = function (e) {
		e.preventDefault();
	}
	for(var i=0; i < len - 2; i ++) {
		var li = document.createElement('li');
		var liC = document.createElement('div');
		li.appendChild(liC);
		btnList.appendChild(li);

	}
	var btnLen = btnList.children.length; //btnList total
	var allDiv = btnList.getElementsByTagName('div');

	

	function getStyle(elem, prop) {
		if(window.getComputedStyle){
			return window.getComputedStyle(elem,null)[prop];
		}else{ //IE
			return elem.currenStyle[prop];
		}
	}
	function animate(obj, json, callback) {
		if(key){
			key = false;
			timer = setInterval(function () {
				var isStop = true;
				for (var attr in json) {
					var now = parseInt(getStyle(obj, attr));
					var speed = (json[attr]-now) / 10;
					speed = speed>0?Math.ceil(speed):Math.floor(speed);
					var current = now + speed;
					obj.style[attr] = current + 'px';
					isStop = json[attr] !== current ? false : true;
				}
				if (isStop) {
					key = true;
					clearInterval(timer);
					callback && callback();
				}
			},10);

		}
	}
	carouselBox.onmouseenter = function () {
		leftBtn.style.display = 'block';
		rightBtn.style.display = 'block';
		clearTimeout(changeImg);
	}
	carouselBox.onmouseleave = function () {
		leftBtn.style.display = 'none';
		rightBtn.style.display = 'none';
		changeImg = setInterval(nextImg,3500);
	}
	for (var i = 0; i < btnLen; i ++) {
		btnList.children[i].index = i;
		btnList.children[i].onclick = function () {
			index = this.index + 1;
			navChange();
			animate(imgContain, {left : -index * imgWidth});
		}
	}
	leftBtn.onclick = prevImg;
	rightBtn.onclick = nextImg;

	function nextImg() {
		if(isMoving) {
			return;
		}
		isMoving = true;
		index ++;
		navChange();
		animate(imgContain,{
			left : -index * imgWidth
		}, function () {
			if(index == len-1) {
				imgContain.style.left = -1 * imgWidth + 'px';
				index = 1;
			}
			isMoving = false;
		});
	}
	function prevImg() {
		if(isMoving) {
			return;
		}
		index --;
		isMoving = true;
		navChange();
		animate(imgContain,{
			left : -index * imgWidth
		}, function () {
			if(index == 0) {
				imgContain.style.left = -(len-2) * imgWidth + 'px';
				index = len-2;
			}
			isMoving = false;
		});
	}
	function navChange(){
		for (var i = 0; i < btnLen; i++) {
			allDiv[i].style.width = '';
		}
		if (index > btnLen) {
			allDiv[0].style.width = '100%';
		} else if (index < 1) {
			allDiv[4].style.width = '100%';
		} else {
			allDiv[index - 1].style.width = '100%';
		}
	}
	function init() {
		changeImg = setInterval(nextImg, 3500);
		allDiv[0].style.width = '100%';
	}
	return init;
} ())