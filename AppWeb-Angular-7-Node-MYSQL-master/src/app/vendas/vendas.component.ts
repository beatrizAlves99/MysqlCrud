import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VendasService } from './services/vendas.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {


  isCollapsed = true;
  vendas: Array<any>;
  venda: any;
  private formActived = false;
  atualizar: boolean;
  constructor(private venda_service: VendasService, private router: Router, private routeActive: ActivatedRoute) { }
  public activeForm() {
    this.formActived = true;
  }
  ngOnInit() {
    this.venda = {};
    this.listarVenda()
    this.atualizar = false;
    const par = this.routeActive.snapshot.params;
    if (par.id) {
      this.venda_service.pegarVenda(par.id).subscribe(resposta => {
        console.log(resposta);
        this.venda = resposta;
        this.atualizar = true;
      });
    }
  }

  criarVenda(formulario: FormGroup) {
    this.venda_service.criarVenda(this.venda).subscribe(resposta => {
      this.listarVenda();
    });
    formulario.reset();
  }

  listarVenda() {
    this.venda_service.listarVenda().subscribe(resposta => this.vendas = resposta);
  }
  deletarVenda(venda: any) {
    this.venda_service.deletarVenda(venda.id).subscribe(resposta => {
      this.listarVenda();
    });
  }
  atualizarVenda(formulario: FormGroup) {
    this.venda_service.atualizarVenda(this.venda.id, this.venda).subscribe(resposta => {
      console.log(resposta);
      console.log('cheguei aqui');

    });
    formulario.reset();
    this.router.navigate(['/vendas']);
  }

}
