import { Observable } from "rxjs";
import { SeguridadModel } from "../seguridad.model";

export abstract class UsuariosGateway {
  abstract ListarUsuarios(): Observable<Array<SeguridadModel>>;
  // abstract newEmpresa(empresas: EmpresasModel): Observable<object>
}
