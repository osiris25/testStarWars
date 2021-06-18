import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajeComponent } from 'src/app/personaje/personaje.component';
import { ResidentesComponent } from './residentes/residentes.component';

const routes: Routes = [
  {
   path: '', component:PersonajeComponent
  },
  {
    path: 'residente', component:ResidentesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
