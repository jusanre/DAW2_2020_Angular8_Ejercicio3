import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormControlName } from '@angular/forms'; // Nuevos imports 
import { Validators } from '@angular/forms'; // Para validación de formulario

import { Gato } from '../gato';

@Component({
  selector: 'app-gato-nuevo',
  templateUrl: './gato-nuevo.component.html',
  styleUrls: ['./gato-nuevo.component.css']
})
export class GatoNuevoComponent implements OnInit {

  @Output() mensajeDelHijo = new EventEmitter<Gato>(); 
  gato:Gato;

  gatoForm: FormGroup; // Formulario con un grupo de elementos

  constructor() { }

  ngOnInit(): void {
    this.gato = new Gato('','');

    this.gatoForm = new FormGroup({
      nombre : new FormControl('', [Validators.required]),
      raza : new FormControl(''),
      edad : new FormControl(-1, [Validators.max(25), Validators.min(-1)])
    });

  }

  // Para acortar las referencias en la vista
  get nombre() { return this.gatoForm.get('nombre'); }
  
  get raza() { return this.gatoForm.get('raza'); }

  get edad() { return this.gatoForm.get('edad')}

  
  // Y controlamos el evento onSubmit
  formSubmit() {
    this.gato = this.gatoForm.value; // Obtenemos los valores del formulario
    this.addGato(this.gato); // Llamamos a addGato para mantener la funcionalidad de la app
    this.gatoForm.reset(); // Vaciamos el formulario
  }

  addGato(gato:Gato) { 
    this.mensajeDelHijo.emit(gato);
    this.gato = new Gato('','');
  }

}
