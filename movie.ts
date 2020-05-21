//Crear una clase que se llame Movie con los siguientes atributos públicos
export class Movie{
    public title:string
    public releaseYear:number
    public actors:string
    public nacionality:string
    public director:string
    public writer:string
    public language:string
    public plataform:string
    public isMCU:boolean
    public mainCharacterName:string
    public producer:string
    public distributor:string
    public genre:string
    //creo el constructor
    constructor(title:string, releaseYear:number, nacionality:string, genre:string){
    this.title=title
    this.releaseYear=releaseYear
    this.nacionality=nacionality
    this.genre=genre  
    }
    //Creo el metodo mostrar datos de las peliculas
    public mostrarDatosPeliculas(){
        console.log(`Titulo: ${this.title} \nAño de lanzamiento: ${this.releaseYear}\nNacionalidad: ${this.nacionality}\nGenero: ${this.genre}\n`)
    }
}
let seven:Movie= new Movie("Seven", 1995, "EE.UU", "Crime")
seven.mostrarDatosPeliculas()

