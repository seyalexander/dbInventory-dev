import { Component, Input } from '@angular/core';
import { inventariosModel } from '../../../../../Domain/models/inventarios/inventarios.models';
import { detalleCarga } from '../../../../../Domain/models/cargaDatos/cargaDatos.model';

@Component({
  selector: 'detalle-inventario',
  standalone: true,
  imports: [],
  templateUrl: './detalle-inventario.component.html',
  styleUrl: './detalle-inventario.component.css'
})
export class DetalleInventarioComponent {
  @Input() citaSeleccionada: inventariosModel = {} as inventariosModel;
  @Input() detalleProductos: Array<detalleCarga> = []

}
