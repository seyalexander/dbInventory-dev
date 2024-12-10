import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuariosGateway } from '../../../Domain/models/seguridad/gateway/seguridad-gateway';
import { Observable } from 'rxjs';
import { SeguridadModel } from '../../../Domain/models/seguridad/seguridad.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService extends UsuariosGateway{

  private URL = environment.api;

  override ListarUsuarios(): Observable<Array<SeguridadModel>> {
    return this.httpClient.get<SeguridadModel[]>(`${this.URL}/Seguridad`)
  }

  constructor(private httpClient: HttpClient) { super() }
}
