import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecomendacionesComponent } from './recomendaciones.component';
import { SeguridadwifiComponent } from './seguridadwifi/seguridadwifi.component';
import { CopiasseguridadComponent } from './copiasseguridad/copiasseguridad.component';
import { SeguridadonlineComponent } from './seguridadonline/seguridadonline.component';



@NgModule({
  declarations: [
    RecomendacionesComponent,
    SeguridadwifiComponent,
    CopiasseguridadComponent,
    SeguridadonlineComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecomendacionesModule { }
