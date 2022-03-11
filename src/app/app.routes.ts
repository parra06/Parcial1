import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ParqueaderoComponent} from "./components/parqueadero/parqueadero.component";
import {CentiAFarenComponent} from "./components/centi-afaren/centi-afaren.component";
import {FarenACentiComponent} from "./components/faren-acenti/faren-acenti.component";




const APP_ROUTES: Routes = [
  { path: 'home',component:HomeComponent},
  {path: 'centiAFaren',component:CentiAFarenComponent},
  {path: 'farenACenti',component:FarenACentiComponent},
  {path: 'parqueadero',component:ParqueaderoComponent},

  {path: '**',pathMatch:'full' , redirectTo: 'home'}
]

export  const  APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
