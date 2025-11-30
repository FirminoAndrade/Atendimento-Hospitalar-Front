import { HeaderComponent } from "./../../template/header/header.component";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IConsulta } from "src/app/model/consulta";
import { IConsultaDTO } from "src/app/model/consultaDTO";
import { IStatus } from "src/app/model/status_consulta";
import { IUsuario } from "src/app/model/usuario";
import { ConsultaService } from "src/app/service/consulta.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-atualizar-consulta",
  templateUrl: "./atualizar-consulta.component.html",
  styleUrls: ["./atualizar-consulta.component.css"],
})
export class AtualizarConsultaComponent implements OnInit {
  consultaDto: IConsultaDTO = {
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

  tipo_risco: IStatus[] = [
    { valor: "VERMELHA" },
    { valor: "LARANJA" },
    { valor: "AMARELA" },
    { valor: "VERDE" },
    { valor: "AZUL" },
  ];

  tipoStatus: IStatus[] = [
    { valor: "AGUARDANDO_TRIAGEM" },
    { valor: "AGUARDANDO_ATENDIMENTO" },
    { valor: "NECESSITA_MEDICACAO" },
    { valor: "RETORNO_MEDICO" },
    { valor: "ATENDIMENTO_FINALIZADO" },
  ];

  private id: any;
  consulta!: IConsulta;
  usuario!: IUsuario;

  constructor(
    private route: ActivatedRoute,
    private service: ConsultaService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.carregarConsulta();
  }

  carregarConsulta() {
    this.service.buscarPorId(this.id).subscribe({
      next: (resposta) => (
        (this.consultaDto = resposta), (this.consulta = resposta)
      ),
    });
  }

  salvar() {
    this.service.atualizarConsulta(this.id, this.consultaDto).subscribe({
      next: () => alert("Atualizado com sucesso!"),
    });
    this.location.back();
  }
  voltar (){
    this.location.back();
  }
}
