import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
  path: '',
  loadChildren: () =>
  import('./feature/modules/main.module').then((m) => m.MainModule),
},
{ path: '**', pathMatch   : 'full', redirectTo: ''  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
