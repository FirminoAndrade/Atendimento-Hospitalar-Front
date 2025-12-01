import { ListaConsultasComponent } from './components/listas/lista-consultas/lista-consultas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ListaTriagemComponent } from './components/listas/lista-triagem/lista-triagem.component';
import { ListaAtendimentoMedicoComponent } from './components/listas/lista-atendimento-medico/lista-atendimento-medico.component';
import { ListaEnfermariaComponent } from './components/listas/lista-enfermaria/lista-enfermaria.component';
import { CriarProntuarioComponent } from './components/criar-prontuario/criar-prontuario.component';
import { ListaProntuariosComponent } from './components/listas/lista-prontuarios/lista-prontuarios.component';
import { AtualizarProntuarioComponent } from './components/atualizar-prontuario/atualizar-prontuario.component';
import { AtualizarConsultaComponent } from './components/atualizar-consulta/atualizar-consulta.component';
import { CriarUsuarioComponent } from './components/admin/criar-usuario/criar-usuario.component';
import { AtualizarUsuarioComponent } from './components/admin/atualizar-usuario/atualizar-usuario.component';
import { ListarUsuariosComponent } from './components/admin/listar-usuarios/listar-usuarios.component';
import { ConsultaDetalhesComponent } from './components/consulta-detalhes/consulta-detalhes.component';
import { CanActiveGuard } from './guard.guard';
import { ListaTodasConsultasComponent } from './components/listas/lista-todas-consultas/lista-todas-consultas.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [CanActiveGuard]},
  { path: 'triagem', component: ListaTriagemComponent, canActivate: [CanActiveGuard] },
  { path: 'medico', component: ListaAtendimentoMedicoComponent, canActivate: [CanActiveGuard] },
  { path: 'enfermaria', component: ListaEnfermariaComponent, canActivate: [CanActiveGuard] },
  { path: 'prontuario', component: CriarProntuarioComponent, canActivate: [CanActiveGuard] },
  { path: 'listar/prontuarios', component: ListaProntuariosComponent, canActivate: [CanActiveGuard] },
  { path: 'atualizar/prontuario/:id', component: AtualizarProntuarioComponent, canActivate: [CanActiveGuard] },
  { path: 'atualizar/consulta/:id', component: AtualizarConsultaComponent, canActivate: [CanActiveGuard] },
  { path: 'consultas-paciente/:id', component: ListaConsultasComponent, canActivate: [CanActiveGuard] },
  { path: 'criar/usuario', component: CriarUsuarioComponent, canActivate: [CanActiveGuard] },
  { path: 'listar/usuarios', component: ListarUsuariosComponent, canActivate: [CanActiveGuard] },
  { path: 'atualizar/usuario/:id', component: AtualizarUsuarioComponent, canActivate: [CanActiveGuard] },
  { path: 'consulta/detalhes/:id', component: ConsultaDetalhesComponent, canActivate: [CanActiveGuard] },
  { path: 'consultas', component: ListaTodasConsultasComponent, canActivate: [CanActiveGuard] },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
