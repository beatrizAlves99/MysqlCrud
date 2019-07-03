import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'app/produtos/services/produtos.service';
import { VendasService } from 'app/vendas/services/vendas.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  produtos: Array<any>;
  produto: any;
  private formActived = false;
  vendas: Array<any>;
  venda: any;
  atualizar: boolean;

  constructor(private produto_service: ProdutosService, private venda_service: VendasService) { 
  }
  public activeForm() {
    this.formActived = true;
  }
  ngOnInit() {
    this.produto = {};
    this.listarProduto()
    this.venda = {};
    this.listarVenda()
  }
  listarProduto() {
    this.produto_service.listarProduto().subscribe(resposta => this.produtos = resposta);
  }
  listarVenda() {
    this.venda_service.listarVenda().subscribe(resposta => this.vendas = resposta);
  }

}
