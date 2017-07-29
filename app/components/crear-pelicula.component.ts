// Importar el núcleo de Angular
import {Component} from "angular2/core";
import {onInit} from "angular2/core";
import {Pelicula} from "../model/pelicula";
import {Router, RouteParams} from "angular2/router";

import {PeliculasService} from "../services/peliculas.service";

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
        templateUrl:"app/view/crear-pelicula.html",
        providers: [PeliculasService]
    
})

 
// Clase del componente donde iran los datos y funcionalidades
export class CrearPeliculaComponent implements onInit {

public nuevaPelicula:Pelicula;
	constructor(private _peliculasService: PeliculasService, 
		private _router:Router, private _routerParams:RouteParams){

	}

	onSubmit() {
		
		this._peliculasService.insertPelicula(this.nuevaPelicula);
		this._router.navigate(["Peliculas"]);
		

	}
	ngOnInit():any{

		this.nuevaPelicula = new Pelicula(
			0,
			this._routerParams.get("titulo"), 
			this._routerParams.get("director"),
			parseInt(this._routerParams.get("anio"))
			);
	}
}
