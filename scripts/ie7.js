(function(){
	// init the array
	var images = [];
	// collect all the img elements
	images = document.getElementsByTagName("img");
	// loop through the collection of img elements
	for (var i = 0; i < images.length; i++) {
		// on each iteration, create a new <br> element and insert adjacent to the <img>
		var br = document.createElement("br");
		images[i].insertAdjacentElement('afterend', br)
	}
})();
