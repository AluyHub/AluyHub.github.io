
	var imgContain = document.getElementsByClassName('imgContent')[0];

	var index = 0;
	var speed = 10;
	var current = parseInt(getComputedStyle(imgContain,null).left);
	var nextLeft = 0; 
	var imgWidth = parseInt(getComputedStyle(imgContain.children[0],null).width);
	var len = imgContain.children.length;
	function changeImg() {
			if(index == len) {
				index = 1;
			}
			setTimeout(changeImg,2000);
			nextLeft = -index * imgWidth;
			console.log(nextLeft);
			animate()
			index ++;
	}
	function animate() {
		if(current > nextLeft) {
			current -= speed;
			imgContain.style.left = current + 'px';
			setTimeout(animate, 10)
		}else if(current == (imgWidth*(-len+1))){
			current = 0;
			imgContain.style.left = '0px';
		}else{
			clearTimeout(animate);
		}
	}
	changeImg();