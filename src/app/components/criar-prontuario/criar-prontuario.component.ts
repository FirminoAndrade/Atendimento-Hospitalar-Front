import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IProntuario } from "src/app/model/prontuario";
import { ProntuarioService } from "src/app/service/prontuario.service";

@Component({
  selector: "app-criar-prontuario",
  templateUrl: "./criar-prontuario.component.html",
  styleUrls: ["./criar-prontuario.component.css"],
})
export class CriarProntuarioComponent {
  prontuario: IProntuario = {
    nome: "",
    cpf: "",
    telefone: "",
    dataNascimento: "",
  };

  constructor(private service: ProntuarioService, private router: Router) {}

  ngOnInit(): void {}

  submitProntuario() {
    this.service.criarProntuario(this.prontuario).subscribe({
      next: (res) => {
        this.service.mensagem("Prontuário criado com sucesso!");
        this.router.navigate(["/home"]);
      },
      error: (err) => {
        this.service.mensagem("Erro ao criar prontuário.");
        console.error(err);
      },
    });
  }
}
