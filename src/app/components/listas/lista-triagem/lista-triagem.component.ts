import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { IConsulta } from "src/app/model/consulta";
import { ConsultaService } from "src/app/service/consulta.service";

@Component({
  selector: "app-lista-triagem",
  templateUrl: "./lista-triagem.component.html",
  styleUrls: ["./lista-triagem.component.css"],
})
export class ListaTriagemComponent implements OnInit {
  consultas: IConsulta[] = [];
  displayedColumns: string[] = [
    "numero",
    "nomePaciente",
    "dataNascimento",
    "status",
    "hora",
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
    this.serviceConsulta.listarTriagem().subscribe({
      next: (resposta) => {
        this.consultas = resposta;
        this.dataSource.data = this.consultas;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        this.snack.open("Não temos consultas no momento!", "Ok", {
          duration: 3000,
        });
        console.error(err);
      },
    });
  }

  editarConsulta(consulta: IConsulta) {
    this.router.navigate(["/atualizar/consulta", consulta.id]);
  }
}
