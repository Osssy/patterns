//10

function filterRange (arr, a, b) {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= a && arr[i] <= b) {
			result.push(arr[i]);
		}
	}

	return result;
}

let arr = ['4', '5', '7', '0', '6', '2'];

let filter = filterRange(arr, 2, 6);

alert(filter);