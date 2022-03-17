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

  horasAux : number = 0;
  contador: number = 2000;


  calcularCargos(){



    if(this.minutosLlegada>= 60 || this.minutosSalida>=60){
      this.cargo.emit(0)

      alert("Ingrese bien los minutos")
    }else if(this.horaLlegada>= 25 || this.horaSalida>=25){
      this.cargo.emit(0)
      alert("El dia solo tiene 24 horas")
    }else{
      if (this.minutosSalida > this.minutosLlegada){
        this.horaSalida+= 1;
        if(this.horaSalida <= this.horaLlegada){
          if (this.horaLlegada == this.horaSalida){
            this.horasAux=24;
          }else{
            this.horasAux = (24-this.horaLlegada)+this.horaSalida;
            this.horaSalida= this.horaSalida-1;
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
      if (this.contador==12500){
        this.contador = 10000;
      }

      this.cargo.emit(this.contador);

    }

    /*this.horaLlegada = 0
    this.minutosLlegada = 0
    this.horaSalida = 0
    this.minutosSalida = 0
    this.contador = 0;*/


  }
  limpiar(){
    this.horaLlegada = 0
    this.minutosLlegada = 0
    this.horaSalida = 0
    this.minutosSalida = 0
  }

}
