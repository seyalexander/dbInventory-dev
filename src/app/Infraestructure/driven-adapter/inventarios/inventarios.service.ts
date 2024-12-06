import { Injectable } from '@angular/core';
import { inventariosGateway } from '../../../Domain/models/inventarios/gateway/inventarios-gateway';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inventariosModel } from '../../../Domain/models/inventarios/inventarios.models';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class InventariosService extends inventariosGateway{

  private URL = environment.api;

  override getInventarios(): Observable<Array<inventariosModel>> {
    return this.httpClient.get<inventariosModel[]>(`${this.URL}/Inventarios`)
  }

  override getInventarioById(rucEmpresa: string, idCarga: number): Observable<inventariosModel> {
      return this.httpClient.get<inventariosModel>(`${this.URL}/Inventarios/${rucEmpresa}/${idCarga}`)
  }

  override newCabecera(cabecera: inventariosModel): Observable<Object> {
      return this.httpClient.post(`${this.URL}/Inventarios/Cabecera`, cabecera)
  }

  override getUltimaCabceraRegistrada(rucEmpresa: string): Observable<number> {
      return this.httpClient.get<number>(`${this.URL}/Inventarios/idCarga/${rucEmpresa}`)
  }

  constructor(private httpClient: HttpClient) { super()}
}
