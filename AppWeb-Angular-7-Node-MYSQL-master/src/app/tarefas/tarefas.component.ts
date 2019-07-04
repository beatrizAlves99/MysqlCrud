import { Component, OnInit } from '@angular/core';
import { TarefasService } from './services/tarefas.service';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {
  //Visibilidade do Botão Adicionar
  isCollapsed = true;
  tarefas: Array<any>;
  tarefa: any;
  private formActived = false;
  atualizar: boolean;

  constructor(private tarefa_service: TarefasService, private router: Router, private routeActive: ActivatedRoute) { }
  public activeForm() {
    this.formActived = true;
  }
  ngOnInit() {
    this.tarefa = {};
    this.listarTarefa()
    this.atualizar = false;
    const par = this.routeActive.snapshot.params;
    if (par.id) {
      this.tarefa_service.pegarTarefa(par.id).subscribe(resposta => {
        console.log(resposta);
        this.tarefa = resposta;
        this.atualizar = true;
      });
    }
  }
  criarTarefa(formulario: FormGroup) {
    this.tarefa_service.criarTarefa(this.tarefa).subscribe(resposta => {
      this.listarTarefa();
    });
    formulario.reset();
  }
  listarTarefa() {
    this.tarefa_service.listarTarefa().subscribe(resposta => this.tarefas = resposta);
  }
  deletarTarefa(tarefa: any) {
    this.tarefa_service.deletarTarefa(tarefa.id).subscribe(resposta => {

    });
    this.listarTarefa();
  }
  atualizarTarefa(formulario: FormGroup) {
    this.tarefa_service.atualizarTarefa(this.tarefa.id, this.tarefa).subscribe(resposta => {
      console.log('cheguei aqui');

    });
    formulario.reset();
    this.router.navigate(['/tarefas']);
  }
}
