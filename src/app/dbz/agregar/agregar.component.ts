import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input()
  nuevo: Personaje = { nombre: '', poder: 0 };

  // @Output()
  // onNuevoPsje: EventEmitter<Personaje> = new EventEmitter();

  constructor(
    private dbzService: DbzService
  ) { }

  ngOnInit(): void {
  }

  agregar() {
    console.log(this.nuevo);
    if (this.nuevo.nombre.trim().length === 0) return;

    // this.onNuevoPsje.emit( this.nuevo );
    this.dbzService.agregarPersonaje( this.nuevo );
    
    this.nuevo = { nombre: '', poder: 0 };
  }
}
