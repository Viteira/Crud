import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:"", pathMatch: "full", redirectTo:"login"},
  {path : 'usuarios', component : UsuariosComponent},
  {path : 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
