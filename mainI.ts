<<<<<<< HEAD
// importo las clases Movie e Imdb
import {Movie} from "./movie"
import {Imdb} from "./imdb"

let seven:Movie= new Movie("Seven", 1995, "EE.UU", "Crime")
let lamb:Movie= new Movie("El silencio de los corderos", 1991, "EE.UU", "Crime")
=======
// importo la clase Movie e imdb
import {Movie} from "./movie"
import {Imdb} from "./imdb"
let seven:Movie= new Movie("Seven", 1995, "EE.UU", "Crime")
let lamb:Movie= new Movie("EL silencio de los corderos", 1991, "EE.UU", "Thriler")
>>>>>>> r1
let pelis:Movie[]= new Array(seven, lamb)
let pelis2:Imdb= new Imdb(pelis)
console.log(pelis2)