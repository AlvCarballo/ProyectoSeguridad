import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentificarataquesComponent } from './identificarataques.component';
import { FalsoscorreosComponent } from './falsoscorreos/falsoscorreos.component';
import { FalsapublicidadComponent } from './falsapublicidad/falsapublicidad.component';



@NgModule({
  declarations: [
    IdentificarataquesComponent,
    FalsoscorreosComponent,
    FalsapublicidadComponent
  ],
  imports: [
    CommonModule

  ]
})
export class IdentificarataquesModule { }
