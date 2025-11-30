import { Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { IConsulta } from "src/app/model/consulta";
import { ConsultaService } from "src/app/service/consulta.service";

@Component({
  selector: "app-lista-atendimento-medico",
  templateUrl: "./lista-atendimento-medico.component.html",
  styleUrls: ["./lista-atendimento-medico.component.css"],
})
export class ListaAtendimentoMedicoComponent {
  consultas: IConsulta[] = [];
  consultasRetorno: IConsulta[] = [];

  displayedColumns: string[] = [
    "nomePaciente",
    "dataNascimento",
    "status",
    "classificacaoRisco",
    "acoes",
  ];

  dataSourceAtendimento = new MatTableDataSource<IConsulta>();
  dataSourceRetorno = new MatTableDataSource<IConsulta>();

  @ViewChild("paginatorAtendimento") paginatorAt!: MatPaginator;
  @ViewChild("paginatorRetorno") paginatorRet!: MatPaginator;

  constructor(
    private serviceConsulta: ConsultaService,
    private snack: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarConsultas();
    this.carregarConsultasRetorno();
  }

  carregarConsultas() {
    this.serviceConsulta.listarAtendimentoMedico().subscribe({
      next: (res) => {
        const ordem = ["VERMELHA", "LARANJA", "AMARELA", "VERDE", "AZUL"];

        this.consultas = res.sort(
          (a, b) =>
            ordem.indexOf(a.classificacaoRisco!) -
            ordem.indexOf(b.classificacaoRisco!)
        );

        this.dataSourceAtendimento.data = this.consultas;
        this.dataSourceAtendimento.paginator = this.paginatorAt;
      },
      error: () => {
        this.snack.open("Não temos pacientes para consultar!", "Ok", {
          duration: 3000,
        });
      },
    });
  }

  listarConsultasPaciente(prontuarioId: number) {
    this.router.navigate([`/consultas-paciente/${prontuarioId}`]);
  }

  carregarConsultasRetorno() {
    this.serviceConsulta.listarRetornoMedico().subscribe({
      next: (res) => {
        this.consultasRetorno = res;

        this.dataSourceRetorno.data = this.consultasRetorno;
        this.dataSourceRetorno.paginator = this.paginatorRet;
      },
      error: () => {
        this.snack.open("Não temos pacientes para retorno!", "Ok", {
          duration: 3000,
        });
      },
    });
  }

  editarConsulta(consulta: IConsulta) {
    this.router.navigate(["/atualizar/consulta", consulta.id]);
  }
}
