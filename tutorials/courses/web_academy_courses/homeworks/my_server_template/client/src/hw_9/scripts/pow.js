//11

function pow(x, n) {
	let result = x;

	for (let i = 0; i < n; i++) {
		result *= n;
	}

	return result;
}

if (n <= 1) {
	alert("never give up!");
}	else {
	alert( pow(x, n) );
}