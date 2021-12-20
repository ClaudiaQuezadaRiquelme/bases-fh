import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'SuperWoman'];
  heroeBorrado: string = '';

  constructor() {
    console.log('constructor 1');
    
  }

  ngOnInit(): void {
    console.log('ngOnInit 2');
    
  }

  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';
  }

}
