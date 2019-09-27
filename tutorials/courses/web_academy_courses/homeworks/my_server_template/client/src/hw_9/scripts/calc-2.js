//8

let numbers = [];

while(true) {
	let value = prompt('введите число', 0);
	if (value === "" || value === null || isNaN(value)) break; {
		numbers.push(+value);
	}
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}

alert(sum);