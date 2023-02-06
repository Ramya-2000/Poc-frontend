import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './login/login.component';
import { SignUpPage } from './signup/signup.component';
import { PageNotFound } from './page-notfound/page-not-found';


@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    SignUpPage,
    PageNotFound
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],             
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
