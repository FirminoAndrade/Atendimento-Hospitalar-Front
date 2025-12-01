import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { IConsulta } from "src/app/model/consulta";
import { IProntuario } from "src/app/model/prontuario";
import { ConsultaService } from "src/app/service/consulta.service";

@Component({
  selector: "app-lista-todas-consultas",
  templateUrl: "./lista-todas-consultas.component.html",
  styleUrls: ["./lista-todas-consultas.component.css"],
})
export class ListaTodasConsultasComponent implements OnInit {
  consulta!: IConsulta;
  consultas: any[] = [];
  dataSource = new MatTableDataSource<IConsulta>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ["nome", "cpf", "data", "status", "acoes"];

  constructor(private router: Router, private servico: ConsultaService) {}

  ngOnInit(): void {
    this.listar();

    this.dataSource.filterPredicate = (consulta: IConsulta, filtro: string) => {
      const nome = consulta.prontuario?.nome?.toLowerCase() || "";
      const cpf = consulta.prontuario?.cpf || "";

      return nome.includes(filtro) || cpf.includes(filtro);
    };
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listar() {
    this.servico.listarTodasConsultas().subscribe({
      next: (data) => {
        console.log("Recebido:", data);

        this.consultas = data;
        this.dataSource.data = data;

        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error("Erro ao listar consultas:", err);
      },
    });
  }

  editarConsulta(consulta: IConsulta) {
    this.router.navigate(["/atualizar/consulta", consulta.id]);
  }

  consultaDetalhada(id: number) {
    this.router.navigate(["/consulta/detalhes", id]);
  }
}
