import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CadreJuridiqueComponent } from './cadre-juridique/cadre-juridique.component';
import { TextesgenerauxComponent } from './textesgeneraux/textesgeneraux.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegimesDesEtuesEtExamensetDesStagesComponent } from './regimes-des-etues-et-examenset-des-stages/regimes-des-etues-et-examenset-des-stages.component';
import { ConcoursAdmissionEnsComponent } from './concours-admission-ens/concours-admission-ens.component';
import { ConcoursAgregationComponent } from './concours-agregation/concours-agregation.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CadreJuridiqueComponent,
    TextesgenerauxComponent,
    NavbarComponent,
      RegimesDesEtuesEtExamensetDesStagesComponent,
      ConcoursAdmissionEnsComponent,
      ConcoursAgregationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
