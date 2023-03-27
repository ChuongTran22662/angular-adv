import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./helpers";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/rxjs/rxjs.module').then(m => m.RxjsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
