//1
function randomInteger(min, max) {
	let randomise = min + Math.random() * (max+1-min);
	randomise = Math.floor(randomise);
	return randomise;
};

alert( randomInteger(4, 10) );
