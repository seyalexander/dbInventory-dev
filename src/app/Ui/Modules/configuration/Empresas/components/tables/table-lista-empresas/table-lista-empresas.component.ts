import { Component } from '@angular/core';
import { EmpresasService } from '../../../../../../../Infraestructure/driven-adapter/empresas/empresas.service';
import { EmpresasModel } from '../../../../../../../Domain/models/empresas/empresas.model';
import { Subscription } from 'rxjs';
import { RegistroEmpresaComponent } from '../../modals/registro-empresa/registro-empresa.component';

@Component({
  selector: 'table-lista-empresas',
  standalone: true,
  imports: [RegistroEmpresaComponent],
  templateUrl: './table-lista-empresas.component.html',
  styleUrl: './table-lista-empresas.component.css'
})
export class TableListaEmpresasComponent {

  private empresasSubscription: Subscription | undefined;
  DatosEmpresas: Array<EmpresasModel> = [];
  cantidadEmpresas: number = 0

  constructor(
    private _empresas: EmpresasService,
  ) {}

  ngOnInit(): void {
    this.listaEmpresas()
  }

  listaEmpresas() {
    this.empresasSubscription = this._empresas
    .ListarEmpresas()
    .subscribe((response: EmpresasModel[]) => {
      this.DatosEmpresas = response
      this.cantidadEmpresas = response.length
    });
  }

  ngOnDestroy(): void {
    if (this.empresasSubscription) {
      this.empresasSubscription.unsubscribe();
    }
  }

}
