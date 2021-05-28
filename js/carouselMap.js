
	var imgContain = document.getElementsByClassName('imgContent')[0];

	var index = 0;
	function imgMove() {
		if(index > 5){
			index = 0;
		}
		index ++;
		// imgContain.style.left = -index * 500 + 'px'; 
		console.log(index);
		setTimeout(imgMove, 1000)
	}
	imgMove();