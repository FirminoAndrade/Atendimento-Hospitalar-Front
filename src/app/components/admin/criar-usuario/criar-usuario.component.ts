import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IStatus } from 'src/app/model/status_consulta';
import { IUsuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})
export class CriarUsuarioComponent implements OnInit{

  usuario: IUsuario = {
      nome: '',
      funcao: '',
      senha: ''
    };

    tipoStatus: IStatus[] = [
        { valor: "ADMIN" },
        { valor: "RECEPCAO" },
        { valor: "TRIAGEM" },
        { valor: "MEDICO" },
        { valor: "ENFERMEIRA" },
      ];
  
    constructor(private service: UsuarioService, private router: Router) { }
  
    ngOnInit(): void { }
  
    submitUsuario() {
      this.service.criarUsuarioService(this.usuario).subscribe({
        next: (resposta) => {
          this.service.mensagem('Usuário criado com sucesso!');
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.service.mensagem('Erro ao criar Usuário.');
          console.error(err);
        }
      });
    }
  }

