import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ContactMeComponent} from "./pages";
import {PracticalExperiencesComponent} from "./pages";
import {IntroductionComponent} from "./pages";
import {EducationComponent} from "./pages";
import {RelatedCoursesComponent} from "./pages";
import {SkillsComponent} from "./pages";
import {WorkshopsComponent} from "./pages";
import {ClassroomProjectsComponent} from "./pages";
import {PublicationsComponent} from "./pages";
import {ConferencesComponent} from "./pages";
import {LanguageProficiencyComponent} from "./pages";
import {ReferencesComponent} from "./pages";



@NgModule({
  declarations: [
    IntroductionComponent,
    ContactMeComponent,
    EducationComponent,
    PracticalExperiencesComponent,
    RelatedCoursesComponent,
    SkillsComponent,
    ClassroomProjectsComponent,
    PublicationsComponent,
    WorkshopsComponent,
    ConferencesComponent,
    LanguageProficiencyComponent,
    ReferencesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FeatureModule { }
