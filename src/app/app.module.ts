import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './webs/principal/principal.component';
import { IdentificarataquesComponent } from './webs/identificarataques/identificarataques.component';
import { FalsoscorreosComponent } from './webs/identificarataques/falsoscorreos/falsoscorreos.component';
import { FalsapublicidadComponent } from './webs/identificarataques/falsapublicidad/falsapublicidad.component';
import { RecomendacionesComponent } from './webs/recomendaciones/recomendaciones.component';
import { SeguridadwifiComponent } from './webs/recomendaciones/seguridadwifi/seguridadwifi.component';
import { CopiasseguridadComponent } from './webs/recomendaciones/copiasseguridad/copiasseguridad.component';
import { SeguridadonlineComponent } from './webs/recomendaciones/seguridadonline/seguridadonline.component';
import { TiposmalwareComponent } from './webs/tiposmalware/tiposmalware.component';
import { VirusComponent } from './webs/tiposmalware/virus/virus.component';
import { GusanoComponent } from './webs/tiposmalware/gusano/gusano.component';
import { TroyanoComponent } from './webs/tiposmalware/troyano/troyano.component';
import { RasomwareComponent } from './webs/tiposmalware/rasomware/rasomware.component';
import { SofwareseguridadComponent } from './webs/sofwareseguridad/sofwareseguridad.component';
import { SoftwareseguridadComponent } from './webs/softwareseguridad/softwareseguridad.component';
import { AntivirusComponent } from './webs/softwareseguridad/antivirus/antivirus.component';
import { GestorespasswdComponent } from './webs/softwareseguridad/gestorespasswd/gestorespasswd.component';
import { HardwareseguridadComponent } from './webs/hardwareseguridad/hardwareseguridad.component';
import { LlavesseguridadComponent } from './webs/hardwareseguridad/llavesseguridad/llavesseguridad.component';
import { SeguridadbiometricaComponent } from './webs/hardwareseguridad/seguridadbiometrica/seguridadbiometrica.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    IdentificarataquesComponent,
    FalsoscorreosComponent,
    FalsapublicidadComponent,
    RecomendacionesComponent,
    SeguridadwifiComponent,
    CopiasseguridadComponent,
    SeguridadonlineComponent,
    TiposmalwareComponent,
    VirusComponent,
    GusanoComponent,
    TroyanoComponent,
    RasomwareComponent,
    SofwareseguridadComponent,
    SoftwareseguridadComponent,
    AntivirusComponent,
    GestorespasswdComponent,
    HardwareseguridadComponent,
    LlavesseguridadComponent,
    SeguridadbiometricaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
