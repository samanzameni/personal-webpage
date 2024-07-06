import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {IntroductionComponent} from "../pages";


const routes: Routes = [
  {
    path: '',
    component: IntroductionComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class IntroductionModule { }
