import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardwareseguridadComponent } from './hardwareseguridad.component';
import { LlavesseguridadComponent } from './llavesseguridad/llavesseguridad.component';
import { SeguridadbiometricaComponent } from './seguridadbiometrica/seguridadbiometrica.component';



@NgModule({
  declarations: [
    HardwareseguridadComponent,
    LlavesseguridadComponent,
    SeguridadbiometricaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HardwareseguridadModule { }
