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