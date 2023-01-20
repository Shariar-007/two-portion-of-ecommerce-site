import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AdminGuard} from "./shared/guard/admin.guard";

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'login',
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'not-found', component: NotFoundComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
