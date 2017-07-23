// Importar el núcleo de Angular
import {Component} from "angular2/core";
import {Pelicula} from "./model/pelicula";
import {PeliculasListComponent} from "./components/peliculas-list.component";


 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'peliculas-footer',
    templateUrl:"app/view/peliculas-footer.html"    
})
 
// Clase del componente donde iran los datos y funcionalidades
export class PeliculasFooterComponent {
	public titulo:string = "Películas con Angular2";
	
}
