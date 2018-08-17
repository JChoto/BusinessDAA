import { Component, OnInit } from '@angular/core';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})

export class ServiciosComponent implements OnInit {

  public circulo1 = 'fa fa-circle';
  public circulo2 = 'fa fa-circle-o';
 
  constructor() {


  }
  sinestilo: boolean = false;
  estilo: boolean = false;

  sinestilojeep: boolean = false;
  estilojeep: boolean = false;

  sinestiloautomovil: boolean = false;
  estiloautomovil: boolean = false;

  
  ngOnInit() {
       
  
 
    this.sinestilo = false;
    this.estilo = true;

    this.sinestilojeep = true;
    this.estilojeep = false;

    this.sinestiloautomovil = true;
    this.estiloautomovil = false;

    this.hiddencamioneta1 = false; /*Mostrar la primera camioneta*/
    this.hiddenslidecamionetas = false; /*mostrar el slide de camionetas*/

    this.hiddenslidejeeps = true; /*ocultar el slide de jeeps*/
    this.hiddenslideautomoviles = true; /*ocultar el slide de automoviles*/

    
  }
  recargar(){
    location.reload();
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }
  
  public hiddencamioneta1 = true;
  public hiddencamioneta2 = true;
  public hiddenslidecamionetas = true;

  public hiddenjeep1 = true;
  public hiddenjeep2 = true;
  public hiddenslidejeeps = true;

  public hiddenautomovil1 = true;
  public hiddenautomovil2 = true;
  public hiddenslideautomoviles = true;


  /*Inicio Eventos de Camioneta*/

  showmenucamioneta() {

    this.hiddenslidecamionetas = false;
    this.hiddenslidejeeps = true;
    this.hiddenslideautomoviles = true;


    this.sinestilo = false;
    this.estilo = true;

    this.sinestilojeep = true;
    this.estilojeep = false;

    this.sinestiloautomovil = true;
    this.estiloautomovil = false;

    this.hiddencamioneta1 = false;
    this.hiddenautomovil1 = true;
    this.hiddenjeep1 = true;
    this.hiddenautomovil2 = true;
    this.hiddenjeep2 = true;

    this.circulo1 = 'fa fa-circle';
    this.circulo2 = 'fa fa-circle-o';
  }

  showcamioneta1() {
    this.hiddencamioneta1 = false;
    this.hiddencamioneta2 = true;
    this.estilo = true;
    this.sinestilo = false;
    this.circulo1 = 'fa fa-circle';
    this.circulo2 = 'fa fa-circle-o';
  }

  showcamioneta2() {
    this.hiddencamioneta2 = false;
    this.hiddencamioneta1 = true;
    this.estilo = true;
    this.sinestilo = false;
    this.circulo1 = 'fa fa-circle-o';
    this.circulo2 = 'fa fa-circle';
  }

  /*Fin Eventos de Camioneta*/

  /*Inicio Eventos de Jeep*/

  showmenujeep() {
    this.hiddenslidejeeps = false;
    this.hiddenslidecamionetas = true;
    this.hiddenslideautomoviles = true;

    this.sinestilojeep = false;
    this.estilojeep = true;
    this.sinestilo = true;
    this.estilo = false;
    this.sinestiloautomovil = true;
    this.estiloautomovil = false;

    this.hiddenjeep1 = false;
    this.hiddencamioneta1 = true;
    this.hiddenautomovil1 = true;
    this.hiddencamioneta2 = true;
    this.hiddenautomovil2 = true;

    this.circulo1 = 'fa fa-circle';
    this.circulo2 = 'fa fa-circle-o';
  }

  showjeep1() {
    this.hiddenjeep1 = false;
    this.hiddenjeep2 = true;
    this.sinestilo = true;
    this.estilo = false;
    this.sinestilojeep = false;
    this.estilojeep = true;
    this.circulo1 = 'fa fa-circle';
    this.circulo2 = 'fa fa-circle-o';
  }

  showjeep2() {
    this.hiddenjeep1 = true;
    this.hiddenjeep2 = false;
    this.sinestilo = true;
    this.estilo = false;
    this.sinestilojeep = false;
    this.estilojeep = true;
    this.circulo1 = 'fa fa-circle-o';
    this.circulo2 = 'fa fa-circle';
  }

  /*Fin Eventos de Jeep*/

  /*Inicio Eventos de Automovil*/

  showmenuautomovil() {
    this.hiddenslideautomoviles = false;
    this.hiddenslidejeeps = true;
    this.hiddenslidecamionetas = true;
    this.sinestilo = true;
    this.estilo = false;
    this.sinestiloautomovil = false;
    this.estiloautomovil = true;
    this.sinestilojeep = true;
    this.estilojeep = false;
    this.hiddenautomovil1 = false;
    this.hiddencamioneta1 = true;
    this.hiddenjeep1 = true;
    this.hiddencamioneta2 = true;
    this.hiddenjeep2 = true;
    this.circulo1 = 'fa fa-circle';
    this.circulo2 = 'fa fa-circle-o';
  }

  showautomovil1() {
    this.hiddenautomovil1 = false;
    this.hiddenautomovil2 = true;
    this.sinestiloautomovil = false;
    this.estiloautomovil = true;
    this.sinestilo = true;
    this.estilo = false;
    this.sinestilojeep = true;
    this.estilojeep = false;
    this.circulo1 = 'fa fa-circle';
    this.circulo2 = 'fa fa-circle-o';
  }

  showautomovil2() {
    this.hiddenautomovil1 = true;
    this.hiddenautomovil2 = false;
    this.sinestiloautomovil = false;
    this.estiloautomovil = true;
    this.sinestilo = true;
    this.estilo = false;
    this.sinestilojeep = true;
    this.estilojeep = false;
    this.circulo1 = 'fa fa-circle-o';
    this.circulo2 = 'fa fa-circle';
  }



  /*Fin Eventos de Automovil*/

  /*Inicio Evento Hacia el Inicio de la Pagina*/

  

  /*Fin Evento Hacia el Inicio de la Pagina*/


}
