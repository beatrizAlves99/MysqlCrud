import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmpresasService } from './services/empresas.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})

export class EmpresasComponent implements OnInit {
  isCollapsed = true;
  empresas: Array<any>;
  empresa: any;
  private formActived = false;
  atualizar: boolean;

  constructor(private empresa_service: EmpresasService, private router: Router, private routeActive: ActivatedRoute) { }
  public activeForm() {
    this.formActived = true;
  }
  ngOnInit() {
    this.empresa = {};
    this.listarEmpresa()
    this.atualizar = false;
    const par = this.routeActive.snapshot.params;
    if (par.id) {
      this.empresa_service.pegarEmpresa(par.id).subscribe(resposta => {
        console.log(resposta);
        this.empresa = resposta;
        this.atualizar = true;
      });
    }

  }

  criarEmpresa(formulario: FormGroup) {
    this.empresa_service.criarEmpresa(this.empresa).subscribe(resposta => {
      this.listarEmpresa();
     });
    formulario.reset();
  }

  listarEmpresa() {
    this.empresa_service.listarEmpresa().subscribe(resposta => this.empresas = resposta);
  }
  deletarEmpresa(empresa: any) {
    this.empresa_service.deletarEmpresa(empresa.id).subscribe(resposta => {
      this.listarEmpresa();
    });

  }
  atualizarEmpresa(formulario: FormGroup) {
    this.empresa_service.atualizarEmpresa(this.empresa.id, this.empresa).subscribe(resposta => {
      console.log(resposta);
      console.log('cheguei aqui');


    });
    formulario.reset();
    this.router.navigate(['/empresas']);

  }



}
