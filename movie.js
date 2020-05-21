"use strict";
exports.__esModule = true;
exports.Movie = void 0;
//Crear una clase que se llame Movie con los siguientes atributos públicos
var Movie = /** @class */ (function () {
    //creo el constructor
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    //Creo el metodo mostrar datos de las peliculas
    Movie.prototype.mostrarDatosPeliculas = function () {
        console.log("Titulo: " + this.title + "\n" + "Año de lanzamiento: " + this.releaseYear + "\n" + "Nacionalidad: " + this.nacionality + "\n" + "Genero: " + this.genre + "\n");
    };
    return Movie;
}());
exports.Movie = Movie;
var seven = new Movie("Seven", 1995, "EE.UU", "Crime");
seven.mostrarDatosPeliculas();
