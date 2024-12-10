
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { SeguridadModel } from '../../models/seguridad/seguridad.model';
import { UsuariosGateway } from '../../models/seguridad/gateway/seguridad-gateway';


@Injectable({
  providedIn: 'root'
})


export class DowloadCargaDatosUseCases {
  constructor( private _seguridadGateWay: UsuariosGateway) {}

  ListarusUarios() : Observable<Array<SeguridadModel>> {
    return this._seguridadGateWay.ListarUsuarios();
  }
}
