import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.component';
import { PageNotFound } from './page-notfound/page-not-found';
import {SignUpPage} from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch: 'full'},
  {path: 'login', component:LoginPage},
  {path:'signup', component: SignUpPage},
  {path:'**', component:PageNotFound}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppRoutingModule]

})
export class AppRoutingModule { }
