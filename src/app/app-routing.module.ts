import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ModalComponent } from './pages/modal/modal.component';
import { CadastrarMangaComponent } from './pages/cadastrarmanga/cadastrarmanga.component';
import { ListarmangasComponent } from './pages/listarmangas/listarmangas.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent},
  {path:'cadastrar', component:CadastrarComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'modal', component:ModalComponent},
  {path:'cadastrarmanga', component:CadastrarMangaComponent},
  {path:'listarmangas', component:ListarmangasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
