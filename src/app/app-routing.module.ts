import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { NuevoLoginScreenComponent } from './screens/nuevo-login-screen/nuevo-login-screen.component';
import { RegistroProductoScreenComponent } from './screens/registro-producto-screen/registro-producto-screen.component';
import { RegistroMateriaScreenComponent } from './screens/registro-materia-screen/registro-materia-screen.component';
import { HomeMateriasScreenComponent } from './screens/home-materias-screen/home-materias-screen.component';

const routes: Routes = [
  //Aquí se agregan cada una de las rutas del proyecto
  { path: '', component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full' },
  { path: 'registro/:id', component: RegistroScreenComponent, pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full' },
  { path: "registro-producto", component: RegistroProductoScreenComponent, pathMatch: "full" },
  { path: "nuevo-login", component: NuevoLoginScreenComponent, pathMatch: "full" },
  { path: "registro-materias", component: RegistroMateriaScreenComponent, pathMatch: "full" },
  { path: "registro-materias/:nrc", component: RegistroMateriaScreenComponent, pathMatch: "full" },
  { path: "home-materias", component: HomeMateriasScreenComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
