//read more!


export function readMore() {
	const dots = document.querySelector(".dots");
	const moreText = document.querySelector(".more");
	const btnText = document.querySelector(".more-link");

	btnText.addEventListener('click', more);

	function more() {
	  
	  if (dots.style.display === "none") {
	    dots.style.display = "inline";
	    btnText.innerHTML = "Read more"; 
	    moreText.style.display = "none";
	  } else {
	    dots.style.display = "none";
	    btnText.innerHTML = "Read less"; 
	    moreText.style.display = "inline";
	  }
	}
}
