import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { PracticalExperiencesComponent} from "../pages";


const routes: Routes = [
  {
    path: '',
    component: PracticalExperiencesComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class PracticalExperiencesModule { }
