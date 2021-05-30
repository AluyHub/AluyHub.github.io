var InitChangeImg =(function () {
	var carouselBox = document.getElementsByClassName('carouselBox')[0];
	var imgContain = document.getElementsByClassName('imgContent')[0];
	var index = 1;
	var btIndex = 0;
	var btWidth = 0;
	var speed = 10;
	var nextLeft = 0;7
	var timer = null;
	var flag = true;	
	var len = imgContain.children.length;
	var imgWidth = parseInt(getComputedStyle(imgContain.children[0],null).width);
	imgContain.style.left = -1 * imgWidth + 'px';
	var current = parseInt(imgContain.style.left);
	var leftBtn = document.getElementsByClassName('leftControl')[0];
	var rightBtn = document.getElementsByClassName('rightControl')[0];
	var btnList = document.getElementsByClassName('btnList')[0];
	var allDiv = btnList.getElementsByTagName('div');
	imgContain.style.width = len * imgWidth+'px';

	// document.onmousedown = document.oncontextmenu = function (e) {
	// 	var event = e || window.event;
	// 	event.preventDefault()
	// }

	// for(var i=0; i < imgContain.children.length; i ++) {
	// 	var li = document.createElement('li');
	// 	var liC = document.createElement('div');
	// 	li.appendChild(liC);
	// 	btnList.appendChild(li);

	// }
	// for(var i = 0; i < btnList.children.length; i++) {
	// 	(function (j) {
	// 		btnList.children[j].onmouseenter = function () {
	// 			btnList.children[j].children[0].style.width = '100%';
	// 		}
	// 		btnList.children[j].onmouseleave = function () {
	// 			btnList.children[j].children[0].style.width = 0;
	// 		}
	// 	}(i))
	// }
	function changeImg() {
		if(index == len) {
			index = 2;
		}
		// 0 -500 -1000 -1500 -2000 - 2500 -3000
		nextLeft = -index * imgWidth;

		timer = setTimeout(changeImg,3500);
		carouselBox.onmouseenter = function () {
			leftBtn.style.display = 'block';
			rightBtn.style.display = 'block';
			clearTimeout(timer);
		}
		carouselBox.onmouseleave = function () {
			leftBtn.style.display = 'none';
			rightBtn.style.display = 'none';
			timer = setTimeout(changeImg,3500);
		}
		rightBtn.onclick = function () {
			if (flag) {
				flag = false;
				if(index == len){
					index = 1;
				}
				nextLeft = -index * imgWidth;
				animate();
				index++;
			}
		}
		leftBtn.onclick = function () {
			if (flag) {
				flag = false;
				if(index == 0){
					index = 5;
				}
				prevLeft = current + imgWidth;
				console.log(prevLeft)
				move();
				index--;;
				console.log(index);
			}
		}
		animate();
		index ++;
	}
	function animate() {
		if(current > nextLeft) {
			current -= speed;
			imgContain.style.left = current + 'px';
			setTimeout(animate, 10)
		}else if(current == (imgWidth*(-len+1))){
			current = -1 * imgWidth;
			imgContain.style.left = -1 * imgWidth + 'px';
			flag = true;
		}else{
			flag = true;
		}
	}
	function move(){
		if(current < prevLeft){
			current += speed;
			imgContain.style.left = current + 'px';
			setTimeout(move,10);
		}else if(current == 0){
			current = -index * 5 * imgWidth;
			imgContain.style.left = current + 'px';
			flag = true;
		}else {
			flag = true;
		}

	}



	function init() {
		changeImg();
	}
	return init;
} ())