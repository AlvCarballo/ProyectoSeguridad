import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HardwareseguridadModule } from './webs/hardwareseguridad/hardwareseguridad.module';
import { IdentificarataquesModule } from './webs/identificarataques/identificarataques.module';
import { PrincipalComponent } from './webs/principal/principal.component';
import { RecomendacionesModule } from './webs/recomendaciones/recomendaciones.module';
import { SoftwareseguridadModule } from './webs/softwareseguridad/softwareseguridad.module';
import { TiposmalwareModule } from './webs/tiposmalware/tiposmalware.module';
import { RegisterComponent } from './webs/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HardwareseguridadModule,
    IdentificarataquesModule,
    RecomendacionesModule,
    SoftwareseguridadModule,
    TiposmalwareModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
