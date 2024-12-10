import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableCargaDatosComponent } from '../../Components/Tables/table-carga-datos/table-carga-datos.component';
import { ModalCargaDatosComponent } from '../../Components/Modals/modal-carga-datos/modal-carga-datos.component';
import { GrupoStatsCargaDatosComponent } from '../../Components/Stats/grupo-stats-carga-datos/grupo-stats-carga-datos.component';
import { GrupoButtonsHeaderCargaDatosComponent } from '../../Components/Buttons/grupo-buttons-header-carga-datos/grupo-buttons-header-carga-datos.component';
import { TableDesignOneComponent } from '../../Components/Tables/table-design-one/table-design-one.component';
import { Subscription } from 'rxjs';
import { inventariosModel } from '../../../../../Domain/models/inventarios/inventarios.models';
import { InventariosUseCases } from '../../../../../Domain/use-case/inventarios/get-inventarios-useCase';
import { OpcionesHeaderUsuarioComponent } from '../../../configuration/Configuration_home/components/opciones-header-usuario/opciones-header-usuario.component';

@Component({
  selector: 'carga-inventario-page',
  standalone: true,
  imports: [
    RouterLink,
    GrupoStatsCargaDatosComponent,
    GrupoButtonsHeaderCargaDatosComponent,
    TableCargaDatosComponent,
    TableDesignOneComponent,
    ModalCargaDatosComponent,
    OpcionesHeaderUsuarioComponent
  ],
  templateUrl: './carga-inventario-page.component.html',
  styleUrl: './carga-inventario-page.component.css'
})
export class CargaInventarioPageComponent {
  private listaInventarios = inject(InventariosUseCases)
  private inventarioSubscription: Subscription | undefined;
  cantidadDatosInventarioLista: number = 0

  ngOnInit(): void {
    this.listarInventarios()
  }

  listarInventarios() {
    this.inventarioSubscription = this.listaInventarios
      .getInventarios()
      .subscribe((Response: inventariosModel[]) => {
        this.cantidadDatosInventarioLista = Response.length
      });
  }

  ngOnDestroy(): void {
    if (this.inventarioSubscription) {
      this.inventarioSubscription.unsubscribe();
    }
  }
}
