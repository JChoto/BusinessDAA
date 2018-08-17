import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-sobrenosotros',
  templateUrl: './sobrenosotros.component.html',
  styleUrls: ['./sobrenosotros.component.css']
})
export class SobrenosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 
    
  }

  recargar(){
    location.reload();
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }
  
}
