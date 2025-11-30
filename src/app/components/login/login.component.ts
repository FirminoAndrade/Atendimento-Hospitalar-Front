import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IUsuario } from "src/app/model/usuario";
import { UsuarioService } from "src/app/service/usuario.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  hide = true;
  id!: string;
  senha!: string;
  usuario!: IUsuario;
  private token: any;

  constructor(private router: Router, public service: UsuarioService) {}

  ngOnInit(): void {}

  submitLogin() {
    this.service.validarSenha(this.id, this.senha).subscribe({
      next: (usuario) => {
        if (usuario) {
          this.usuario = usuario;
          this.service.usuario = usuario;
          this.redirecionarPorFuncao(usuario.funcao); 
        }
      },
      error: () => {
        this.service.mensagem(
          "Usuário não encontrado, Matricula ou Senha incorreto!"
        );
      },
    });
  }

  private redirecionarPorFuncao(funcao: string) {
    switch (funcao.toUpperCase()) {
      case "ADMIN":
        this.router.navigate(["/home"]);
        break;
      case "RECEPCAO":
        this.router.navigate(["/home"]);
        break;
      case "TRIAGEM":
        this.router.navigate(["/triagem"]);
        break;
      case "MEDICO":
        this.router.navigate(["/medico"]);
        break;
      case "ENFERMEIRA":
        this.router.navigate(["/enfermaria"]);
        break;
      default:
        this.service.mensagem("Função de usuário inválida!");
        break;
    }
  }
}
