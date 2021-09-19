import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CadreJuridiqueComponent } from './cadre-juridique/cadre-juridique.component';
import { TextesgenerauxComponent } from './textesgeneraux/textesgeneraux.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CadreJuridiqueComponent,
    TextesgenerauxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
