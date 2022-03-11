import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent {
  cargo: number = 0;


  mostrarResultado(resultado: number){

    this.cargo=resultado;

  }

}
