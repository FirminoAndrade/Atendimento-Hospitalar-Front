import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { IUsuario } from "../model/usuario";

const URL = environment.URLTEST;

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  usuario!: IUsuario;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  listarUsuariosService(): Observable<any> {
    return this.http.get(URL + "usuario");
  }

  criarUsuarioService(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(URL + "usuario", usuario);
  }

  buscarPorId(id: string): Observable<IUsuario> {
    return this.http.get<IUsuario>(URL + "usuario/" + id);
  }

  buscarPorMatricula(matricula: string): Observable<IUsuario> {
    return this.http.get<IUsuario>(URL + "usuario/matricula/" + matricula);
  }

  atualizarUsuarioService(usuario: IUsuario) {
    return this.http.put(URL + "usuario/" + usuario.id, usuario);
  }

  deleteUsuarioService(id: String): Observable<any> {
    return this.http.delete(URL + "usuario/" + id);
  }

  validarSenha(id: string, senha: string): Observable<IUsuario> {
    return this.http.post<IUsuario>(
      URL + "usuario/login?id=" + id + "&senha=" + senha,
      {}
    );
  }

  public mensagem(msg: string): void {
    this._snack.open(msg, "ok", {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 5000,
    });
  }
}
