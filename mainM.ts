// importo la clase Movie
import {Movie} from "./movie"

let seven:Movie= new Movie("Seven", 1995, "EE.UU", "Crime")

import {Imdb} from "./imdb"
let lamb:Movie= new Movie("EL silencio de los corderos", 1991, "EE.UU", "Thriler")

let pelis: Movie[] = new Array(seven, lamb)
let pelis2:Imdb= new Imdb(pelis)
console.log(pelis2.crearJson())

// (pelis2.peliculas[0].printPeliculas())
