import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

 

  ngOnInit() {
  
   /* this.functiontop();
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;*/
  }

  desabilitar(){
    
  }

  recargar(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    location.reload();
  }
  /*
  clicktop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }
  functiontop() {
    window.onscroll = function()
    {
      top();
    }
    function top(){
      if(document.body.scrollTop>100 || document.documentElement.scrollTop>100)
      {
        document.getElementById("top").style.display="block";
      }
      else
      {
        document.getElementById("top").style.display="none";
    
      }
    }
  }*/
  

 
  
}
