import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './services/produtos.service';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  isCollapsed = true;
  produtos: Array<any>;
  produto: any;
  atualizar: boolean;
  private formActived = false;

  constructor(private produto_service: ProdutosService, private router: Router, private routeActive: ActivatedRoute) {
  }
  public activeForm() {
    this.formActived = true;
  }
  ngOnInit() {
    this.produto = {};
    this.listarProduto()
    this.atualizar = false;
    const par = this.routeActive.snapshot.params;
    if (par.id) {
      this.produto_service.pegarProduto(par.id).subscribe(resposta => {
        console.log(resposta);
        this.produto = resposta;
        this.atualizar = true;
      });
    }
  }


  criarProduto(formulario: FormGroup) {
    this.produto_service.criarProduto(this.produto).subscribe(resposta => {
      this.listarProduto();
    });
    formulario.reset();
  }

  listarProduto() {
    this.produto_service.listarProduto().subscribe(resposta => this.produtos = resposta);
  }
  deletarProduto(produto: any) {
    this.produto_service.deletarProduto(produto.id).subscribe(resposta => {
      this.listarProduto();
    });
  }

  atualizarProduto(formulario: FormGroup) {
    this.produto_service.atualizarProduto(this.produto.id, this.produto).subscribe(resposta => {
      console.log(resposta);

    });
    formulario.reset();
    this.router.navigate(['/produtos']);


  }

}
