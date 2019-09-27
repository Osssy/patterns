import './hw_9.scss';

//1
function randomInteger(min, max) {
	let randomise = min + Math.random() * (max+1-min);
	randomise = Math.floor(randomise);
	return randomise;
};

alert( randomInteger(4, 10) );

//2
let user {};
user.name = 'Вася';
user.surname = 'Петров';
user.name = 'Сергей';
delete user.name;

//3