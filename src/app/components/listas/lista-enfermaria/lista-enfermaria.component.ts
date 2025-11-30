import { Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { IConsulta } from "src/app/model/consulta";
import { ConsultaService } from "src/app/service/consulta.service";

@Component({
  selector: "app-lista-enfermaria",
  templateUrl: "./lista-enfermaria.component.html",
  styleUrls: ["./lista-enfermaria.component.css"],
})
export class ListaEnfermariaComponent {
  consultas: IConsulta[] = [];
  displayedColumns: string[] = [
    "nomePaciente",
    "dataNascimento",
    "status",
    "hora",
    "classificacaoRisco",
    "acoes",
  ];
  dataSource = new MatTableDataSource<IConsulta>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private serviceConsulta: ConsultaService,
    private snack: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarConsultas();
  }

  carregarConsultas() {
    this.serviceConsulta.listarParaEnfermaria().subscribe({
      next: (res) => {
        this.consultas = res;
        this.dataSource.data = this.consultas;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        this.snack.open("Erro ao carregar consultas", "Ok", { duration: 3000 });
        console.error(err);
      },
    });
  }

  editarConsulta(consulta: IConsulta) {
    this.router.navigate(["/atualizar/consulta", consulta.id]);
  }
}
