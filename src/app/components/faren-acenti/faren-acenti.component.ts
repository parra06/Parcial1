import { Component } from '@angular/core';

@Component({
  selector: 'app-faren-acenti',
  templateUrl: './faren-acenti.component.html',
  styleUrls: ['./faren-acenti.component.css']
})
export class FarenACentiComponent {

  grados:number = 0;
  result: number = 0;
  convertir(){
    this.result = 5.0 / 9.0 * (this.grados - 32)
  }

}
