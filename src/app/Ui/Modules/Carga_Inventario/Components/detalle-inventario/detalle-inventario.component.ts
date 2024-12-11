import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() cantidadInventarios: number = 0


  @Input() paginatedProductos: Array<detalleCarga> = [];
  @Input() currentPageProductos: number = 1;
  @Input() totalPagesProductos: number = 1;

  @Output() changePage = new EventEmitter<number>();

  nextPage() {
    if (this.currentPageProductos < this.totalPagesProductos) {
      this.changePage.emit(this.currentPageProductos + 1);
    }
  }

  prevPageProductos() {
    if (this.currentPageProductos > 1) {
      this.changePage.emit(this.currentPageProductos - 1);
    }
  }
}
