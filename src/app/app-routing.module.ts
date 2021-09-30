import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component'
import { CadreJuridiqueComponent } from './cadre-juridique/cadre-juridique.component'
import { TextesgenerauxComponent } from './textesgeneraux/textesgeneraux.component'
import { RegimesDesEtuesEtExamensetDesStagesComponent } from './regimes-des-etues-et-examenset-des-stages/regimes-des-etues-et-examenset-des-stages.component';
import { ConcoursAdmissionEnsComponent } from './concours-admission-ens/concours-admission-ens.component'
import { ConcoursAgregationComponent } from './concours-agregation/concours-agregation.component'
import { BourseEtVieUniversitaireComponent } from './bourse-et-vie-universitaire/bourse-et-vie-universitaire.component'
import { StatutsParticuliersComponent } from './statuts-particuliers/statuts-particuliers.component'
import { AdminEnsComponent } from './admin-ens/admin-ens.component'
import { ForTestComponent } from './for-test/for-test.component'
import { AddStudentComponent } from './add-student/add-student.component'
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'cadrejuridique', component: CadreJuridiqueComponent },
  { path: 'cadrejuridique/textesgeneraux', component: TextesgenerauxComponent },
  { path: 'cadrejuridique/les-regimes', component: RegimesDesEtuesEtExamensetDesStagesComponent },
  { path: 'cadrejuridique/admission', component: ConcoursAdmissionEnsComponent },
  { path: 'cadrejuridique/concours-dagregation', component: ConcoursAgregationComponent },
  { path: 'cadrejuridique/bourse-et-vie-universitaire', component: BourseEtVieUniversitaireComponent },
  { path: 'cadrejuridique/statuts-particuliers', component: StatutsParticuliersComponent },
  { path: 'administration-de-le-n-s', component: AdminEnsComponent },
  { path: 'addstudent', component: AddStudentComponent },
  { path: 'test', component: ForTestComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
