import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskDirective, NgxMaskPipe, NgxMaskModule } from 'ngx-mask';
import { LoginComponent } from './components/login/login.component';
import { ListaTriagemComponent } from './components/listas/lista-triagem/lista-triagem.component';
import { ListaAtendimentoMedicoComponent } from './components/listas/lista-atendimento-medico/lista-atendimento-medico.component';
import { ListaEnfermariaComponent } from './components/listas/lista-enfermaria/lista-enfermaria.component';
import { ListaProntuariosComponent } from './components/listas/lista-prontuarios/lista-prontuarios.component';
import { CriarProntuarioComponent } from './components/criar-prontuario/criar-prontuario.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './template/header/header.component';
import { AtualizarProntuarioComponent } from './components/atualizar-prontuario/atualizar-prontuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AtualizarConsultaComponent } from './components/atualizar-consulta/atualizar-consulta.component';
import { ListaConsultasComponent } from './components/listas/lista-consultas/lista-consultas.component';
import { CriarUsuarioComponent } from './components/admin/criar-usuario/criar-usuario.component';
import { AtualizarUsuarioComponent } from './components/admin/atualizar-usuario/atualizar-usuario.component';
import { ListarUsuariosComponent } from './components/admin/listar-usuarios/listar-usuarios.component';
import { ConsultaDetalhesComponent } from './components/consulta-detalhes/consulta-detalhes.component';
import { CpfMaskPipe } from './pipes/cpf-mask.pipe';
import { TelefoneMaskPipe } from './pipes/telefone-mask.pipe';
import { PresaoArterialMaskPipe } from './pipes/presao-arterial-mask.pipe';
import { ListaTodasConsultasComponent } from './components/listas/lista-todas-consultas/lista-todas-consultas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaTriagemComponent,
    ListaAtendimentoMedicoComponent,
    ListaEnfermariaComponent,
    ListaProntuariosComponent,
    CriarProntuarioComponent,
    HomeComponent,
    HeaderComponent,
    AtualizarProntuarioComponent,
    AtualizarConsultaComponent,
    ListaConsultasComponent,
    CriarUsuarioComponent,
    AtualizarUsuarioComponent,
    ListarUsuariosComponent,
    ConsultaDetalhesComponent,
    CpfMaskPipe,
    TelefoneMaskPipe,
    PresaoArterialMaskPipe,
    ListaTodasConsultasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatListModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatPaginatorModule,
    MatMenuModule,
    MatTableModule,
    NgxMaskModule.forRoot(),
    FlexLayoutModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
