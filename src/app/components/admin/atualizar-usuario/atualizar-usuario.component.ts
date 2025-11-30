import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Location } from "@angular/common";
import { IStatus } from 'src/app/model/status_consulta';

@Component({
  selector: 'app-atualizar-usuario',
  templateUrl: './atualizar-usuario.component.html',
  styleUrls: ['./atualizar-usuario.component.css']
})
export class AtualizarUsuarioComponent implements OnInit {

  usuario: IUsuario = {
    id: '',
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

  id: any;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router,
     private location: Location
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.carregarUsuario();
  }

  carregarUsuario() {
      this.usuarioService.buscarPorId(this.id).subscribe({
        next: (resposta) => {
          this.usuario = resposta;
        },
        error: (err) => {
          console.error('Erro ao carregar usuário:', err);
        }
      });
  }

  atualizarUsuario() {
    this.usuarioService.atualizarUsuarioService(this.usuario).subscribe({
      next: () => {
        alert('Usuário atualizado com sucesso!');
        this.router.navigate(['/usuarios']);
      },
      error: (err) => {
        console.error('Erro ao atualizar usuário:', err);
        alert('Erro ao atualizar usuário!');
      }
    });
    this.location.back();
  }
}
