import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from './empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  private empresas: Empresa[];
  URL_SERVIDOR = 'http://localhost:3000/empresas';

  constructor(private http: HttpClient) {
    this.empresas = [];
  }


  listarEmpresa() {
    return this.http.get<Array<any>>(`${this.URL_SERVIDOR}`);
  }

  criarEmpresa(empresa: any) {
    return this.http.post(this.URL_SERVIDOR, empresa);
  }

  deletarEmpresa(id: any) {
    return this.http.delete(this.URL_SERVIDOR + '/' + id);

  }
  atualizarEmpresa(id: any, update: any): Observable<any> {
    return this.http.put(`${this.URL_SERVIDOR}`, update);
  }
  pegarEmpresa(id: any) {
    return this.http.get(`${this.URL_SERVIDOR}/${id}`);
  }

}
