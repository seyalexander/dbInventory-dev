import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableCargaDatosComponent } from '../../Components/Tables/table-carga-datos/table-carga-datos.component';
import { ModalCargaDatosComponent } from '../../Components/Modals/modal-carga-datos/modal-carga-datos.component';
import { GrupoStatsCargaDatosComponent } from '../../Components/Stats/grupo-stats-carga-datos/grupo-stats-carga-datos.component';
import { GrupoButtonsHeaderCargaDatosComponent } from '../../Components/Buttons/grupo-buttons-header-carga-datos/grupo-buttons-header-carga-datos.component';

@Component({
  selector: 'carga-inventario-page',
  standalone: true,
  imports: [
    RouterLink,
    GrupoStatsCargaDatosComponent,
    GrupoButtonsHeaderCargaDatosComponent,
    TableCargaDatosComponent,
    ModalCargaDatosComponent
  ],
  templateUrl: './carga-inventario-page.component.html',
  styleUrl: './carga-inventario-page.component.css'
})
export class CargaInventarioPageComponent {

}
