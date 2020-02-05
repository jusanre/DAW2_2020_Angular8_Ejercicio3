import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Importamos el módulo


import { AppComponent } from './app.component';
import { GatoComponent } from './gato/gato.component';
import { GatoMensajesComponent } from './gato-mensajes/gato-mensajes.component';
import { GatoNuevoComponent } from './gato-nuevo/gato-nuevo.component';



@NgModule({
  declarations: [
    AppComponent,
    GatoComponent,
    GatoMensajesComponent,
    GatoNuevoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule // Y aquí lo añadimos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
