import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ParqueaderoComponent } from './components/parqueadero/parqueadero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {APP_ROUTING} from "./app.routes";
import {FormsModule} from "@angular/forms";
import { FormParqueaderoComponent } from './components/form-parqueadero/form-parqueadero.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { FarenACentiComponent } from './components/faren-acenti/faren-acenti.component';
import { CentiAFarenComponent } from './components/centi-afaren/centi-afaren.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParqueaderoComponent,
    NavbarComponent,
    FormParqueaderoComponent,
    ResultadoComponent,

    FarenACentiComponent,
    CentiAFarenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
