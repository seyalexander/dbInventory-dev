import { Observable } from "rxjs";
import { EmpresasModel } from "../empresas.model";

export abstract class EmpresasGateway {
  abstract ListarEmpresas(): Observable<Array<EmpresasModel>>;
}
