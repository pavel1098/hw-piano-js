const piano = document.getElementsByClassName('piano-key');


function playSound(sound) {
	sound.currentTime = 0;
	sound.play();
}

 
function playByKlick(element) {
 	element.addEventListener('mousedown', function() {
 		playSound(element.childNodes[3]);
 		element.classList.add('active');
 	});
	element.addEventListener('mouseup', function() {
 		element.classList.remove('active');
 		});
 }



function playByKey(element) {
 	document.addEventListener('keypress', function(event) {
 	const letterKey = element.childNodes[1].textContent.toLowerCase().charCodeAt();

 	if(event.keyCode === letterKey) {
 		element.classList.add('active');
		playSound(element.childNodes[3]);
 	}
 	});
	document.addEventListener('keyup', function() {
 			element.classList.remove('active');
 		});
}


for (let i = 0; i < piano.length; i++) {
	playByKlick(piano[i]);
	playByKey(piano[i]);
}

