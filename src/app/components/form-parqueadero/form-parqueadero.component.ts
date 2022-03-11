import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-form-parqueadero',
  templateUrl: './form-parqueadero.component.html',
  styleUrls: ['./form-parqueadero.component.css']
})
export class FormParqueaderoComponent  {

  horaLlegada: number = 0;
  minutosLlegada: number = 0;
  horaSalida: number = 0;
  minutosSalida: number = 0;
  @Output() cargo = new EventEmitter<number>();
  mensaje: string = "";
  horasAux : number = 0;
  contador: number = 2000;


  calcularCargos(){

    this.horaLlegada = parseInt((<HTMLInputElement>document.getElementById("horaLlegada")).value)
    this.minutosLlegada = parseInt((<HTMLInputElement>document.getElementById("minutosLlegada")).value)
    this.horaSalida = parseInt((<HTMLInputElement>document.getElementById("horaSalida")).value)
    this.minutosSalida = parseInt((<HTMLInputElement>document.getElementById("minutosSalida")).value)

    if(this.minutosLlegada>= 60 || this.minutosSalida>=60){
      this.cargo.emit(0)

      this.mensaje="Ingrese bien los minutos";
    }else{
      if (this.minutosSalida > this.minutosLlegada){
        this.horaSalida+= 1;
        if(this.horaSalida <= this.horaLlegada){
          if (this.horaLlegada == this.horaSalida){
            this.horasAux=24;
          }else{
            this.horasAux = (24-this.horaLlegada)+this.horaSalida;
          }

        }else{
          this.horasAux = this.horaSalida-this.horaLlegada;
        }
      }else{
        if(this.horaSalida > this.horaLlegada){
          this.horasAux = this.horaSalida-this.horaLlegada;

        }else{
          this.horasAux = (24-this.horaLlegada)+this.horaSalida;
        }
      }

      for (var i=1;i<=this.horasAux;i++){
        if (i<=3){
          this.contador=2000
        }else{
          this.contador+=500
        }
      }

      this.cargo.emit(this.contador);

    }
    this.horaLlegada = 0
    this.minutosLlegada = 0
    this.horaSalida = 0
    this.minutosSalida = 0
    this.mensaje=""
    this.contador = 0;


  }

}