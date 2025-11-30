import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IConsulta } from 'src/app/model/consulta';
import { ConsultaService } from 'src/app/service/consulta.service';


@Component({
  selector: 'app-consulta-detalhes',
  templateUrl: './consulta-detalhes.component.html',
  styleUrls: ['./consulta-detalhes.component.css']
})
export class ConsultaDetalhesComponent implements OnInit {


consulta!: IConsulta;

  constructor(
    private route: ActivatedRoute,
    private serviceConsulta: ConsultaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.serviceConsulta.buscarPorId(id).subscribe({
      next: (dados) => this.consulta = dados,
      error: (err) => console.error('Erro ao carregar consulta', err)
    });
  }
}

