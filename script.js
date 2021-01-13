function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Message must be filled out");
    return false;
  }
}


var planet = document.getElementById('planet');

function fadeOutIn(elem, speed ) {

	if (!elem.style.opacity) {
		elem.style.opacity = 1;
	} 

	var outInterval = setInterval(function() {
		elem.style.opacity -= 0.02;
		if (elem.style.opacity <= 0) {
			clearInterval(outInterval);
			var inInterval = setInterval(function() {
				elem.style.opacity = Number(elem.style.opacity)+0.02;
				if (elem.style.opacity >= 1)
					clearInterval(inInterval);
			}, speed/50 );
		} 
	}, speed/50 );

} 

fadeOutIn(planet, 2000 );

