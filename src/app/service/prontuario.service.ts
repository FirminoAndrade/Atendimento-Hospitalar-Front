import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { IProntuario } from "../model/prontuario";

const URL = environment.URLTEST;

@Injectable({
  providedIn: "root",
})
export class ProntuarioService {
  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  listarProntuarios(): Observable<IProntuario[]> {
    return this.http.get<IProntuario[]>(URL + "prontuario");
  }

  criarProntuario(prontuario: IProntuario): Observable<IProntuario> {
    return this.http.post<IProntuario>(URL + "prontuario", prontuario);
  }

  atualizarProntuario(prontuario: IProntuario): Observable<IProntuario> {
    return this.http.put<IProntuario>(
      URL + "prontuario/" + prontuario.id,
      prontuario
    );
  }

  buscarPorId(id: string): Observable<IProntuario> {
    return this.http.get<IProntuario>(URL + "prontuario/" + id);
  }

  buscarPorCpf(cpf: string): Observable<IProntuario> {
    return this.http.get<IProntuario>(URL + "prontuario/cpf/" + cpf);
  }

  mensagem(msg: string): void {
    this._snack.open(msg, "ok", {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 5000,
    });
  }
}
