let num = 20;
function showFirstMessage() {
	console.log('ggg');
	num = 10;
	
}
showFirstMessage();

console.log(num);

function calc (a, b) {
	return a + b;
	// unreachable code
}
console.log(calc (4, 3)); 

function ret() {
	let num = 50;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
	console.log('hello');
};
logger();

const alc = (a, b) => a + b;


const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
	return amount * curr;
}

function promotion(result) {
	console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function test () {
	for (let i = 0; i < 5; i++) {
		console.log(i);
		if (i === 3) return;
	}
	console.log('done');
}
test();

// функция по умолчанию может возвращать undefined
function doNothing() {};
console.log(doNothing() === undefined);

// методы строк
const str = 'teSt';
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));

const logg = 'Hello world';
console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));

// методы чисел
const num = 12.2;
console.log(Math.round(num));

const test = '12.3px';
console.log(parseInt(test));
console.log(parseFloat(test));

