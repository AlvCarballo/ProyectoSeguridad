import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareseguridadComponent } from './softwareseguridad.component';
import { AntivirusComponent } from './antivirus/antivirus.component';
import { GestorespasswdComponent } from './gestorespasswd/gestorespasswd.component';



@NgModule({
  declarations: [
    SoftwareseguridadComponent,
    AntivirusComponent,
    GestorespasswdComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SoftwareseguridadModule { }
