import { IdentificarataquesComponent } from './webs/identificarataques/identificarataques.component';
import { GestorespasswdComponent } from './webs/softwareseguridad/gestorespasswd/gestorespasswd.component';
import { AntivirusComponent } from './webs/softwareseguridad/antivirus/antivirus.component';
import { SoftwareseguridadComponent } from './webs/softwareseguridad/softwareseguridad.component';
import { RasomwareComponent } from './webs/tiposmalware/rasomware/rasomware.component';
import { TroyanoComponent } from './webs/tiposmalware/troyano/troyano.component';
import { GusanoComponent } from './webs/tiposmalware/gusano/gusano.component';
import { VirusComponent } from './webs/tiposmalware/virus/virus.component';
import { TiposmalwareComponent } from './webs/tiposmalware/tiposmalware.component';
import { SeguridadonlineComponent } from './webs/recomendaciones/seguridadonline/seguridadonline.component';
import { CopiasseguridadComponent } from './webs/recomendaciones/copiasseguridad/copiasseguridad.component';
import { RecomendacionesComponent } from './webs/recomendaciones/recomendaciones.component';
import { FalsoscorreosComponent } from './webs/identificarataques/falsoscorreos/falsoscorreos.component';
import { FalsapublicidadComponent } from './webs/identificarataques/falsapublicidad/falsapublicidad.component';
import { SeguridadbiometricaComponent } from './webs/hardwareseguridad/seguridadbiometrica/seguridadbiometrica.component';
import { LlavesseguridadComponent } from './webs/hardwareseguridad/llavesseguridad/llavesseguridad.component';
import { HardwareseguridadComponent } from './webs/hardwareseguridad/hardwareseguridad.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './webs/principal/principal.component';
import { SeguridadwifiComponent } from './webs/recomendaciones/seguridadwifi/seguridadwifi.component';
import { RegisterComponent } from './webs/register/register.component';

const routes: Routes = [
  {path: '', component:PrincipalComponent},
  {path: 'registro', component:RegisterComponent},

  {path: 'hardwareseguridad', component:HardwareseguridadComponent},
  {path: 'hardwareseguridad/llavesseguridad', component:LlavesseguridadComponent},
  {path: 'hardwareseguridad/seguridadbiometrica', component:SeguridadbiometricaComponent},

  {path: 'identificarataques', component:IdentificarataquesComponent},
  {path: 'identificarataques/falsapublicidad', component:FalsapublicidadComponent},
  {path: 'identificarataques/falsoscorreos', component:FalsoscorreosComponent},

  {path: 'recomendaciones', component:RecomendacionesComponent},
  {path: 'recomendaciones/copiasseguridad', component:CopiasseguridadComponent},
  {path: 'recomendaciones/seguridadonline', component:SeguridadonlineComponent},
  {path: 'recomendaciones/seguridadwifi', component:SeguridadwifiComponent},

  {path: 'tiposmalware', component:TiposmalwareComponent},
  {path: 'tiposmalware/virus', component:VirusComponent},
  {path: 'tiposmalware/gusano', component:GusanoComponent},
  {path: 'tiposmalware/troyano', component:TroyanoComponent},
  {path: 'tiposmalware/rasomware', component:RasomwareComponent},

  {path: 'softwareseguridad', component:SoftwareseguridadComponent},
  {path: 'softwareseguridad/antivirus', component:AntivirusComponent},
  {path: 'softwareseguridad/gestorespasswd', component:GestorespasswdComponent},

  {path: '**', component:PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
