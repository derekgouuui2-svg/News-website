
function navbar() {
	
	var nav = document.getElementById("navbar");
	if (nav.style.width === "0px" || nav.style.width === ""){
		nav.style.width = "100px";
		nav.style.display = "block";
	}
	else {
		nav.style.width = "0px"
		nav.style.display = "none";
	}
	
}


