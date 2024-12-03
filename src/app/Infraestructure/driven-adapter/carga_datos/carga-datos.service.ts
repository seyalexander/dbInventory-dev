import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CargaDatosGateway } from '../../../Domain/models/cargaDatos/gateway/cargaDatos-gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargaDatosService extends CargaDatosGateway{

  private URL = environment.api;


  override DowloadCargaDatos(): Observable<Blob> {
    return this.httpClient.get(`${this.URL}/descargarPlantilla`, { responseType: 'blob' });
  }

  uploadExcel(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post(`${this.URL}/cargarExcel`, formData);
  }

  constructor(private httpClient: HttpClient) { super() }
}
