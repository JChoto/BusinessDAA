import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

import { AgmCoreModule } from '@agm/core';
import { ContactoComponent } from './pages/contacto/contacto.component';
 

export const routes: Routes =
  [
    { path: 'servicios', component: ServiciosComponent },
    { path: 'sobrenosotros', component: SobrenosotrosComponent },
    { path: 'contacto', component: ContactoComponent},
    { path: '', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  ];


@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
    SobrenosotrosComponent,
    ServiciosComponent,
    ContactoComponent,
   

  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2AIFZCw7zk7awbLgyxFGkU_1EmOi6Apg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
