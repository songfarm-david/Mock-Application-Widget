/***
Script for toggling informational panels
through the use of a navigation
--------
David Gaskin
July 7, 2016
***/

(function(){

	// get all the lis in the navigation
	var navItems = document.getElementById("navigation_items");
	var li = navItems.getElementsByTagName("li");

	/**
	* Function for toggling panel
	*
	* @param newItem (object) the newly clicked item
	* @param currentItem (object) the previously clicked item
	*/
	function togglePanel(newItem) {
		var currentItem;

		// loop through li item for the current item
		for (var i = 0; i < li.length; i++) {
			// if item has class active and is not the clicked item
			if(li[i].className === "active" && li[i] != newItem) {
				currentItem = li[i];
			}
		}

		// add class active to new item, remove active class from previous item
		newItem.className = "active";
		currentItem.className = "";
		// get new item's associated panel by name and remove hidden class
		document.getElementById(newItem.getAttribute("name")).className = "";
		// get previous item's panel name and add hide class
		document.getElementById(currentItem.getAttribute("name")).className = "hide";

	} // end of: togglePanel

	// add event listener to each li
	for (var i = 0; i < li.length; i++) {

		// if IE9 or >
		if (li[i].addEventListener) {
		  li[i].addEventListener("click", function() { togglePanel(this); }, false);
		}
		// if < IE9
		else if (li[i].attachEvent)  {
		  li[i].attachEvent("onclick", function() {
				togglePanel(event.srcElement || event.target);
			});
		}

	} // end of: loop

})(); // end of window.onload
