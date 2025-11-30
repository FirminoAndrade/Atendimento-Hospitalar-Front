import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  id = '';
  nome: string = '';
  funcao: string = '';

  constructor(private service: UsuarioService, private location: Location) {}

  ngOnInit(): void {
    this.id = this.service.usuario && this.service.usuario.id ?  this.service.usuario.id : '';
    this.nome = this.service.usuario.nome;
    this.funcao = this.service.usuario.funcao.toUpperCase();
  }

  botaoVoltar (){
    this.location.back();
  }

}
