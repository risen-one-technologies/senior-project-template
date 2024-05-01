import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'form', component: FormComponent},
    { path: 'login', component: LoginComponent},
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
  })

  export class AppRoutingModule{
    
  }