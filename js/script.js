// циклы
let num = 20;
for (let i = 1; i < 8; i++) {
	if (i === 6) {
		// break;
		continue;
	}
}
console.log(i);



// вложенные циклы, пирамидка из *
let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

	for (let j = 0; j < i; j++) {
		result += '*';
	}

	result += '\n';
}
console.log(result);



// как выйти из внутреннего цикла, не закончив его 
// (используем метку)
first: for (let i = 0; i < 3; i++) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level: ${j}`);
		for (let k = 0; k < 3; k++) {
			if (k === 2) continue first; 
			console.log(`Third level: ${k}`);
		}
	}
}


const lines = 5;
let result = '*';

for (let i = 0; i < 6; i++) {
	for (let j = 0; j < i; j++) {
		result = result + '**';
	} 
	result += '\n';
}
console.log(result);

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
 
for (let i = 0; i <= lines; i++) { // начало основного цикла
 
    for (let j = 0; j <= i; j++) { 
         
    }
 
    result += '\n'; 
}
 
console.log(result);


function calculateVolumeAndArea(rebro) {
if (rebro < 0 || typeof rebro !== 'number' || !Number.isInteger(rebro)) {
	return 'При вычислении произошла ошибка';
} return `Объем куба: ${rebro*rebro*rebro}, площадь всей поверхности: ${rebro*rebro*6}`;
}
calculateVolumeAndArea(5);

function getCoupeNumber(seat) {
	if (seat === 0 || seat > 36) {
	return  'Таких мест в вагоне не существует';
	}

	if (seat < 0 || !Number.isInteger(seat) || typeof seat !== 'number') {
	return 'Ошибка. Проверьте правильность введенного номера места';
	}
	
	return Math.ceil(seat / 4);
}

getCoupeNumber(2);
