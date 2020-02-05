import { Component, OnInit, ViewChild } from '@angular/core';
import { Gato } from '../gato';
import { GatoMensajesComponent } from '../gato-mensajes/gato-mensajes.component';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styleUrls: ['./gato.component.css']
})
export class GatoComponent implements OnInit {

  gato:Gato;
  arrayGatos:Gato[];

  mensajePadre:string; 


  constructor() { 
  }

  ngOnInit() {
    this.gato = new Gato('','');
    // Array de gatos
    this.arrayGatos = [
      new Gato('Benito','Siamés',16),
      new Gato('Tina','Persa'),
      new Gato('Sira','Común',1)
    ];
  }

  addGatoOutput(gato:Gato){ // El parámetro gato lo recibe del hijo
    if(/\S+/.test(gato.nombre)){ 
    	this.arrayGatos.push(gato);
      this.gato = new Gato('','');
      this.mensajePadre = "Gato añadido";
    }
  }

  delGato(i:number){
    this.arrayGatos.splice(i,1);
    this.mensajePadre = "Gato eliminado";
  }

}
