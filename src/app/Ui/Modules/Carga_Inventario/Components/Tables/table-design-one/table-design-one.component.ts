import { Component } from '@angular/core';
import { GrupoButtonsHeaderCargaDatosComponent } from '../../Buttons/grupo-buttons-header-carga-datos/grupo-buttons-header-carga-datos.component';
import { DetalleInventarioComponent } from '../../detalle-inventario/detalle-inventario.component';

@Component({
  selector: 'table-design-one',
  standalone: true,
  imports: [
    GrupoButtonsHeaderCargaDatosComponent,
    DetalleInventarioComponent
  ],
  templateUrl: './table-design-one.component.html',
  styleUrl: './table-design-one.component.css'
})
export class TableDesignOneComponent {

}
