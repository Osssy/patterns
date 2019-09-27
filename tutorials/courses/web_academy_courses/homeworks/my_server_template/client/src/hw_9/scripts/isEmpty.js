//3

let obj = {};

function isEmpty(obj) {
	for(let key in obj) {
		return false;
	}
		return true;
}

isEmpty();