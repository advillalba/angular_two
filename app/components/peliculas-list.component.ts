// Importar el núcleo de Angular
import {Component} from "angular2/core";
import {Pelicula} from "../model/pelicula";

 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'peliculas-list',
    templateUrl:"app/view/peliculas-list.html"
    
})
 
// Clase del componente donde iran los datos y funcionalidades
export class PeliculasListComponent {
	public pelicula:Pelicula;
    public peliculaElegida:Pelicula;
    public mostrarDatos:boolean;
    public peliculas;

    constructor() {
        this.mostrarDatos = false;
        this.peliculas = [
new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016),
new Pelicula(2, "La verdad duele", "Will Smith", 2016),
new Pelicula(3, "El señor de los anillos", "Desconocido", 2004),
new Pelicula(4, "Una historia real", "El de supersalidos", 2015),
new Pelicula(5, "Don Jon", "Josep Gordon Levit", 2014)
        ];
        this.pelicula = this.peliculas[0];
        this.peliculaElegida = this.peliculas[0];
        this.debug();
         }

    debug(titulo = null) {
        if (titulo != null) {
            console.log("Título: "+this.pelicula.titulo);
        } else{
            console.log(this.pelicula);
        }

    }
    onShowHide(value){
        this.mostrarDatos = value;
    }
    onCambiarPelicula(pelicula) {
        this.pelicula = pelicula;
        this.peliculaElegida = pelicula;
    }
}