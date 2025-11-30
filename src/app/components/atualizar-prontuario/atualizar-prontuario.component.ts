import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { IProntuario } from "src/app/model/prontuario";
import { ProntuarioService } from "src/app/service/prontuario.service";

@Component({
  selector: "app-atualizar-prontuario",
  templateUrl: "./atualizar-prontuario.component.html",
  styleUrls: ["./atualizar-prontuario.component.css"],
})
export class AtualizarProntuarioComponent implements OnInit {
  prontuario: IProntuario = {
    nome: "",
    cpf: "",
    telefone: "",
    dataNascimento: "",
  };

  constructor(
    private service: ProntuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.service.buscarPorId(id).subscribe({
        next: (res) => (this.prontuario = res),
        error: () =>
          this.snack.open("Prontuário não encontrado", "Ok", {
            duration: 3000,
          }),
      });
    }
  }

  submitProntuario() {
    this.service.atualizarProntuario(this.prontuario).subscribe({
      next: () => {
        this.snack.open("Prontuário atualizado com sucesso!", "Ok", {
          duration: 3000,
        });
        this.router.navigate(["/listar/prontuarios"]);
      },
      error: (err) => {
        console.error(err);
        this.snack.open("Erro ao atualizar prontuário", "Ok", {
          duration: 3000,
        });
      },
    });
  }

  cancelar() {
    this.router.navigate(["/prontuarios"]);
  }
}
