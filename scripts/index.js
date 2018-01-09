window.onload = function(){
	var peopleMenu = document.getElementById('people-menu');
	var peoples = document.getElementsByClassName('people');
	var lis = document.getElementsByTagName('li');
	var a = new Boolean(false);
	
	peopleMenu.addEventListener('mouseover',function(){	
		if (a == false) {
			for (var i = peoples.length - 1; i >= 0; i--) {
				peoples[i].classList.remove('hidden');
			}
			a = true;
		}else{
			for (var i = peoples.length - 1; i >= 0; i--) {
				peoples[i].classList.add('hidden');
			}
			a = false;
		}
	});

}
