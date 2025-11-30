import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IConsulta } from "src/app/model/consulta";
import { ConsultaService } from "src/app/service/consulta.service";

@Component({
  selector: "app-lista-consultas",
  templateUrl: "./lista-consultas.component.html",
  styleUrls: ["./lista-consultas.component.css"],
})
export class ListaConsultasComponent implements OnInit {
  consulta!: IConsulta;
  consultas: IConsulta[] = [];
  prontuarioId!: number;

  constructor(
    private route: ActivatedRoute,
    private service: ConsultaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.prontuarioId = Number(this.route.snapshot.paramMap.get("id"));
    this.carregarConsultas();
    this.carregarNomePaciente();
  }

  carregarConsultas() {
    this.service.listarPorProntuario(this.prontuarioId).subscribe({
      next: (resposta) => (this.consultas = resposta),
    });
  }
  carregarNomePaciente() {
    this.service.buscarPorId(this.prontuarioId).subscribe({
      next: (resposta) => (this.consulta = resposta),
    });
  }

  consultaDetalhada(id: number) {
    this.router.navigate(["/consulta/detalhes", id]);
  }
}
