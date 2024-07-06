import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EducationComponent} from "../pages";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: EducationComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class EducationModule { }
