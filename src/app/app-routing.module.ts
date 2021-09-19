import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component'
import { CadreJuridiqueComponent } from './cadre-juridique/cadre-juridique.component'
import { TextesgenerauxComponent } from './textesgeneraux/textesgeneraux.component'
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'cadrejuridique', component: CadreJuridiqueComponent },
  { path: 'cadrejuridique/textesgeneraux', component: TextesgenerauxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
