// взаимодействие с пользователем alert prompt
const numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const lastWachedFilm1 = prompt('Один из последних просмотренных фильмов', '');
const lastWachedFilmRate1 = prompt('На сколько оцениваете его?', '');
const lastWachedFilm2 = prompt('Один из последних просмотренных фильмов', '');
const lastWachedFilmRate2 = prompt('На сколько оцениваете его?', '');

personalMovieDB.movies[lastWachedFilm1] = lastWachedFilmRate1;
personalMovieDB.movies[lastWachedFilm2] = lastWachedFilmRate2;

console.log(personalMovieDB);

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




// решение задачи с фильмами циклом
const numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

for (let i = 0; i < 2; i++) {
	const lastWachedFilm = prompt('Один из последних просмотренных фильмов', '');
	const lastWachedFilmRate = prompt('На сколько оцениваете его?', '');

	if (lastWachedFilm !== '' && lastWachedFilmRate !== '' && lastWachedFilm.length > 50 && lastWachedFilm !== null && lastWachedFilmRate !== null) {
		personalMovieDB.movies[lastWachedFilm] = lastWachedFilmRate;
		console.log ('done');
	} else {
		console.log ('error');
		i--;
	}
};

if (personalMovieDB.count < 10) {
	console.log ('Мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log ('Вы классный зритель');
} else if (personalMovieDB.count >= 30) {
	console.log ('Вы киноман');
} else {
	console.log ('error');
}

console.log(personalMovieDB);





// решение задачи с фильмами функционально
let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

for (let i = 0; i < 2; i++) {
	const lastWachedFilm = prompt('Один из последних просмотренных фильмов', '');
	const lastWachedFilmRate = prompt('На сколько оцениваете его?', '');

	if (lastWachedFilm !== '' && lastWachedFilmRate !== '' && lastWachedFilm.length > 50 && lastWachedFilm !== null && lastWachedFilmRate !== null) {
		personalMovieDB.movies[lastWachedFilm] = lastWachedFilmRate;
		console.log ('done');
	} else {
		console.log ('error');
		i--;
	}
};

if (personalMovieDB.count < 10) {
	console.log ('Мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log ('Вы классный зритель');
} else if (personalMovieDB.count >= 30) {
	console.log ('Вы киноман');
} else {
	console.log ('error');
}

console.log(personalMovieDB);