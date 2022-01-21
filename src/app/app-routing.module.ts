import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { CoreComponent } from './core/core.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: '', redirectTo: '/core', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
