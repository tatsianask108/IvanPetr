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

// start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function rememberMyFilms() {
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
	}
}

// rememberMyFilms();


function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log ('Мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log ('Вы классный зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log ('Вы киноман');
	} else {
		console.log ('error');
	}
}

// detectPersonalLevel();


function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
// showMyDB(personalMovieDB.privat);


function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');;
	}
}
writeYourGenres();