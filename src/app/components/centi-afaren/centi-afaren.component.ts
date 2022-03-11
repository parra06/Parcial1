import { Component } from '@angular/core';

@Component({
  selector: 'app-centi-afaren',
  templateUrl: './centi-afaren.component.html',
  styleUrls: ['./centi-afaren.component.css']
})
export class CentiAFarenComponent {
grados:number = 0;
result: number = 0;
  convertir(){
    this.result = 9.0 / 5.0 * this.grados + 32;
  }
}
