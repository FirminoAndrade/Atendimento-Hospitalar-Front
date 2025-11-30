import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { IConsulta } from "../model/consulta";
import { IConsultaDTO } from "../model/consultaDTO";

const URL = environment.URLTEST;

@Injectable({
  providedIn: "root",
})
export class ConsultaService {
  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  criarConsulta(
    prontuarioId: string,
    consulta: IConsultaDTO
  ): Observable<IConsulta> {
    return this.http.post<IConsulta>(
      URL + "api/prontuario/" + prontuarioId + "/consulta",
      consulta
    );
  }

  atualizarConsulta(id: number, consulta: IConsultaDTO): Observable<IConsulta> {
    return this.http.put<IConsulta>(URL + "api/consulta/" + id, consulta);
  }

  listarPorProntuario(prontuarioId: number): Observable<IConsulta[]> {
    return this.http.get<IConsulta[]>(
      URL + "api/prontuarios/" + prontuarioId + "/consultas"
    );
  }

  buscarPorId(id: number): Observable<IConsulta> {
    return this.http.get<IConsulta>(URL + "api/consulta/" + id);
  }

  listarTriagem(): Observable<IConsulta[]> {
    return this.http.get<IConsulta[]>(URL + "api/consultas/triagem");
  }

  listarRetornoMedico(): Observable<IConsulta[]> {
    return this.http.get<IConsulta[]>(URL + "api/consultas/retorno");
  }

  listarAtendimentoMedico(): Observable<IConsulta[]> {
    return this.http.get<IConsulta[]>(URL + "api/consultas/atendimento");
  }

  listarParaEnfermaria(): Observable<IConsulta[]> {
    return this.http.get<IConsulta[]>(URL + "api/consultas/enfermaria");
  }

  mensagem(msg: string): void {
    this._snack.open(msg, "ok", {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 5000,
    });
  }
}
