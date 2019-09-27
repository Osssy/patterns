//9

function find(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == value) return i;
	}	else
		return -1;
}