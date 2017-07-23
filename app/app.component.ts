// Importar el núcleo de Angular
import {Component} from "angular2/core";
import {Pelicula} from "./model/pelicula";
import {PeliculasListComponent} from "./components/peliculas-list.component";
import {PeliculasFooterComponent} from "./components/peliculas-footer.component";
import {ContactoComponent} from "./components/contacto.component";
import {CrearPeliculaComponent} from "./components/crear-pelicula.component";

import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";



 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl:"app/view/peliculas.html",
    directives: [PeliculasListComponent, PeliculasFooterComponent, ContactoComponent, CrearPeliculaComponent, ROUTER_DIRECTIVES]
    
})
@RouteConfig([
	{path:"/peliculas", name:"Peliculas", component: PeliculasListComponent, useAsDefault: true}
	{path:"/contacto", name:"Contacto", component: ContactoComponent}
 	{path:"/crear-pelicula", name:"CrearPelicula", component: CrearPeliculaComponent}


])
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
	public titulo:string = "Películas con Angular2";
	
}
