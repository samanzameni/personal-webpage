import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReferencesComponent} from "../pages";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: ReferencesComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class ReferencesModule { }
