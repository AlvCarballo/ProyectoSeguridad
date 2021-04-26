import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HardwareseguridadModule } from './webs/hardwareseguridad/hardwareseguridad.module';
import { IdentificarataquesModule } from './webs/identificarataques/identificarataques.module';
import { PrincipalComponent } from './webs/principal/principal.component';
import { RecomendacionesModule } from './webs/recomendaciones/recomendaciones.module';
import { SoftwareseguridadModule } from './webs/softwareseguridad/softwareseguridad.module';
import { TiposmalwareModule } from './webs/tiposmalware/tiposmalware.module';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    HardwareseguridadModule,
    IdentificarataquesModule,
    RecomendacionesModule,
    SoftwareseguridadModule,
    TiposmalwareModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
