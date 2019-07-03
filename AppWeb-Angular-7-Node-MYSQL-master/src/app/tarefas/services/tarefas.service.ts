import { Injectable } from '@angular/core';
import { Tarefa } from './tarefas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
 
  private tarefas: Tarefa[];
  URL_SERVIDOR = 'http://localhost:3000/tarefas';

  constructor(private http: HttpClient) {
    this.tarefas = [];
  }
  listarTarefa() {
    return this.http.get<Array<any>>(`${this.URL_SERVIDOR}`);
  }
  criarTarefa(tarefa: any) {
    return this.http.post(this.URL_SERVIDOR, tarefa);
  }
  deletarTarefa(id: any) {
    return this.http.delete(this.URL_SERVIDOR + '/' + id);
  }
  atualizarTarefa(id: any, update: any): Observable<any> {
    return this.http.put(`${this.URL_SERVIDOR}/${id}`, update);
  }
  pegarTarefa(id: any) {
    return this.http.get(`${this.URL_SERVIDOR}/${id}`);
  }
}
