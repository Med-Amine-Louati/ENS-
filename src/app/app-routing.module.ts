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
import { AddStudentComponent } from './admin-dash-board/add-student/add-student.component'
import { StudentEspaceComponent } from './student-espace/student-espace.component';
import { VideoCoursComponent } from './student-espace/video-cours/video-cours.component'
import { LoginFormComponent } from './login-form/login-form.component'
import { EmploiDuTempsComponent } from './student-espace/emploi-du-temps/emploi-du-temps.component';
import { TeacherEspaceComponent } from './teacher-espace/teacher-espace.component'
import { NewsPageComponent } from './news-page/news-page.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component'
import { GalerieComponent } from './galerie/galerie.component';
import { LoginComponent } from './admin-dash-board/login/login.component';
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
  { path : 'espace-etudiant', component: StudentEspaceComponent},
  { path : 'espace-enseignant', component: TeacherEspaceComponent},
  { path : 'article', component: NewsPageComponent},
  { path : 'galerie', component : GalerieComponent },
  { path : 'videocours', component: VideoCoursComponent},
  { path : 'login', component: LoginFormComponent},
  { path: 'emploi-du-temps', component: EmploiDuTempsComponent },
  { path: 'admin', component: AdminDashBoardComponent },
  { path: 'adminLogin', component: LoginComponent },



  { path: 'test', component: ForTestComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
