"use strict";
exports.__esModule = true;
// importo la clase Movie e imdb
var movie_1 = require("./movie");
var imdb_1 = require("./imdb");
var seven = new movie_1.Movie("Seven", 1995, "EE.UU", "Crime");
var lamb = new movie_1.Movie("EL silencio de los corderos", 1991, "EE.UU", "Thriler");
var pelis = new Array(seven, lamb);
var pelis2 = new imdb_1.Imdb(pelis);
console.log(pelis2);
