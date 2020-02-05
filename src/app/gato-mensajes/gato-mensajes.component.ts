import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gato-mensajes',
  templateUrl: './gato-mensajes.component.html',
  styleUrls: ['./gato-mensajes.component.css']
})
export class GatoMensajesComponent implements OnInit {

  @Input() mensaje:string; // Recibirá un valor desde el padre

  constructor() { }

  ngOnInit() {
  }

}
