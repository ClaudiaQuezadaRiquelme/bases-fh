import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 12000
        },
        {
          nombre: 'Krillin',
          poder: 7000
        }
    ]

    constructor() {
        console.log('dbz service');
        
    }

    get personajes(): Personaje[] {
        return [...this._personajes]; // evitamos enviar el arreglo por referencia y enviamos su contenido
    }

    agregarPersonaje( psje: Personaje) {
        console.log('agregarPersonaje ', psje);
        this._personajes.push(psje);
    }
}