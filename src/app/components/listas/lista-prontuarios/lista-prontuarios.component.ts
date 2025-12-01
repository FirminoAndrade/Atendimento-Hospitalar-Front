import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { IConsultaDTO } from "src/app/model/consultaDTO";
import { IProntuario } from "src/app/model/prontuario";
import { ConsultaService } from "src/app/service/consulta.service";
import { ProntuarioService } from "src/app/service/prontuario.service";

@Component({
  selector: "app-lista-prontuarios",
  templateUrl: "./lista-prontuarios.component.html",
  styleUrls: ["./lista-prontuarios.component.css"],
})
export class ListaProntuariosComponent implements OnInit, AfterViewInit {
  consultaDto: IConsultaDTO = {
    prontuarioId: 0,
    sintomas: "",
    classificacaoRisco: "",
    pressaoArterial: "",
    frequenciaCardiaca: undefined,
    temperatura: undefined,
    saturacao: undefined,
    status: "",
    diagnosticoMedico: "",
    prescricaoMedica: "",
  };

  prontuarios: IProntuario[] = [];
  displayedColumns: string[] = [
    "id",
    "nome",
    "cpf",
    "nascimento",
    "telefone",
    "acoes",
  ];
  dataSource = new MatTableDataSource<IProntuario>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private serviceProntuario: ProntuarioService,
    private serviceConsulta: ConsultaService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.carregarProntuarios();

     this.dataSource.filterPredicate = (prontuario: IProntuario, filtro: string) => {
    
        const nome = prontuario?.nome?.toLowerCase() || '';
        const cpf = prontuario?.cpf || '';
    
        return nome.includes(filtro) || cpf.includes(filtro);
      };
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  carregarProntuarios() {
    this.serviceProntuario.listarProntuarios().subscribe({
      next: (resposta) => {
        this.prontuarios = resposta.reverse();
        this.dataSource.data = resposta;
      },
      error: (err) => {
        this.snack.open("Erro ao carregar prontuários", "Ok", {
          duration: 3000,
        });
      },
    });
  }

  editarProntuario(id: number) {
    this.router.navigate(["/atualizar/prontuario", id]);
  }

  confirmarCriarConsulta(prontuario: any) {
    const confirmacao = window.confirm(
      `⚠️ Atenção! Você está prestes a criar uma nova consulta para ${prontuario.nome}. Deseja continuar?`
    );
    if (confirmacao) {
      this.criarConsulta(prontuario.id);
    }
  }

  criarConsulta(prontuarioId: number) {
    const novaConsulta: IConsultaDTO = {};

    this.serviceConsulta
      .criarConsulta(prontuarioId.toString(), novaConsulta)
      .subscribe({
        next: (res) => {
          this.snack.open("Consulta criada com sucesso!", "Ok", {
            duration: 3000,
          });
        },
        error: (err) => {
          console.error(err);
          this.snack.open("Erro ao criar consulta", "Ok", { duration: 3000 });
        },
      });
  }
}
