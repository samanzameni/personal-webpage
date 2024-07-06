import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkillsComponent} from "../pages";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: SkillsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class SkillsModule { }
