window.onload = function(){
	var box = document.querySelector(".box");
	var imgs = document.querySelectorAll("img");
	
	document.onmousemove = function(evt){
		var ev = evt || event;
		for(var i = 0; i < imgs.length; i++){
			var distance = dis(evt,imgs[i]);
			imgs[i].style.width = 250 - Math.min(200,distance) + "px"
		}
	}
	
	function dis(evt,img){
		var disX = evt.clientX - box.offsetLeft - img.offsetLeft - img.offsetWidth/2;
		var disY = evt.clientY - box.offsetTop - img.offsetTop - img.offsetHeight/2;
		return Math.sqrt(Math.pow(disX,2)+Math.pow(disY,2));
	}
}
