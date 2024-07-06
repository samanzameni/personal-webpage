import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from "../layouts";
import {NavbarComponent} from "../components";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: '/introduction', pathMatch: 'full' },
      {
        path: 'introduction',
        loadChildren: () =>
          import('./introduction.module').then(
            (module) => module.IntroductionModule
          ),
      },
      {
        path: 'ٍeducation',
        loadChildren: () =>
          import('./education.module').then(
            (module) => module.EducationModule
          ),
      },
      {
        path: 'practical-experience',
        loadChildren: () =>
          import('./practical-experiences.module').then(
            (module) => module.PracticalExperiencesModule
          ),
      },
      {
        path: 'contact-me',
        loadChildren: () =>
          import('./contact-me.module').then(
            (module) => module.ContactMeModule
          ),
      },
      {
        path: 'classroom-projects',
        loadChildren: () =>
          import('./classroom-projects.module').then(
            (module) => module.ClassroomProjectsModule
          ),
      },
      {
        path: 'conferences',
        loadChildren: () =>
          import('./conferences.module').then(
            (module) => module.ConferencesModule
          ),
      },
      {
        path: 'language-proficiency',
        loadChildren: () =>
          import('./language-proficiency.module').then(
            (module) => module.LanguageProficiencyModule
          ),
      },
      {
        path: 'publications',
        loadChildren: () =>
          import('./publications.module').then(
            (module) => module.PublicationsModule
          ),
      },
      {
        path: 'references',
        loadChildren: () =>
          import('./references.module').then(
            (module) => module.ReferencesModule
          ),
      },
      {
        path: 'related-courses',
        loadChildren: () =>
          import('./related-courses.module').then(
            (module) => module.RelatedCoursesModule
          ),
      },
      {
        path: 'skills',
        loadChildren: () =>
          import('./skills.module').then(
            (module) => module.SkillsModule
          ),
      },
      {
        path: 'workshops',
        loadChildren: () =>
          import('./workshops.module').then(
            (module) => module.WorkshopsModule
          ),
      },
    ],
  },
];


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class MainModule { }
