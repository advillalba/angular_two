import {Injectable} from "angular2/core";
import {PELICULAS} from "./mock.peliculas";
@Injectable()

export class PeliculasService{

	getPeliculas(){
		return PELICULAS;
	}
	insertPelicula(pelicula:Pelicula){
		Promise.resolve(PELICULAS).then((peliculas: Pelicula[]) => peliculas.push(pelicula));
	}
}
