import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { IUsuario } from "src/app/model/usuario";
import { UsuarioService } from "src/app/service/usuario.service";

@Component({
  selector: "app-listar-usuarios",
  templateUrl: "./listar-usuarios.component.html",
  styleUrls: ["./listar-usuarios.component.css"],
})
export class ListarUsuariosComponent implements OnInit {
  
  displayedColumns: string[] = [
    "id",
    "nome",
    "funcao",
    'acoes'
  ];
  
  dataSource = new MatTableDataSource<IUsuario>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  aplicarFiltro(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  carregarUsuarios() {
    this.usuarioService.listarUsuariosService().subscribe({
      next: (resposta) => {
        this.dataSource.data = resposta;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => console.error(err),
    });
  }

  excluirUsuario(id: string) {
  if (confirm("Deseja realmente excluir este usuário?")) {
    this.usuarioService.deleteUsuarioService(id).subscribe({
      next: () => {
        alert("Usuário excluído com sucesso!");
        this.carregarUsuarios();
      },
      error: (e) => {
        console.error(e);
        alert("Erro ao excluir o usuário.");
      }
    });
  }
}
}
