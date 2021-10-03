import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CadreJuridiqueComponent } from './cadre-juridique/cadre-juridique.component';
import { TextesgenerauxComponent } from './textesgeneraux/textesgeneraux.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegimesDesEtuesEtExamensetDesStagesComponent } from './regimes-des-etues-et-examenset-des-stages/regimes-des-etues-et-examenset-des-stages.component';
import { ConcoursAdmissionEnsComponent } from './concours-admission-ens/concours-admission-ens.component';
import { ConcoursAgregationComponent } from './concours-agregation/concours-agregation.component';
import { BourseEtVieUniversitaireComponent } from './bourse-et-vie-universitaire/bourse-et-vie-universitaire.component';
import { StatutsParticuliersComponent } from './statuts-particuliers/statuts-particuliers.component';
import { FooterComponent } from './footer/footer.component';
import { AdminEnsComponent } from './admin-ens/admin-ens.component';
import { ForTestComponent } from './for-test/for-test.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentEspaceComponent } from './student-espace/student-espace.component';
import { VideoCoursComponent } from './student-espace/video-cours/video-cours.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CadreJuridiqueComponent,
    TextesgenerauxComponent,
    NavbarComponent,
      RegimesDesEtuesEtExamensetDesStagesComponent,
      ConcoursAdmissionEnsComponent,
      ConcoursAgregationComponent,
      BourseEtVieUniversitaireComponent,
      StatutsParticuliersComponent,
      FooterComponent,
      AdminEnsComponent,
      ForTestComponent,
      AddStudentComponent,
      StudentEspaceComponent,
      VideoCoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
