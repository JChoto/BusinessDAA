import { Component } from '@angular/core';
 import { HomeComponent } from './pages/home/home.component';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
 
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  rootPage: any;
  constructor( ) {
   
    //this.rootPage = Component;// Asi se llama a la primera pagina*(default)
    /// a qui las variables para ngIf
 
}
}