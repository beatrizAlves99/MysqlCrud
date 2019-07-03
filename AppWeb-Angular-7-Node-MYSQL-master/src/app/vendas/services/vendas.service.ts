import { Injectable } from '@angular/core';
import { Venda } from './vendas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private vendas: Venda[];

  URL_SERVIDOR = 'http://localhost:3000/vendas';

  constructor(private http: HttpClient) {
    this.vendas = [];
  }

  listarVenda() {
    return this.http.get<Array<any>>(`${this.URL_SERVIDOR}`);
  }

  criarVenda(venda: any) {
    return this.http.post(this.URL_SERVIDOR, venda);
  }

  deletarVenda(id: any) {

    return this.http.delete(this.URL_SERVIDOR + '/' + id);

  }
  atualizarVenda(id: any, update: any): Observable<any> {
    return this.http.put(`${this.URL_SERVIDOR}/${id}`, update);
  }
  pegarVenda(id: any) {
    return this.http.get(`${this.URL_SERVIDOR}/${id}`);
  }

}
