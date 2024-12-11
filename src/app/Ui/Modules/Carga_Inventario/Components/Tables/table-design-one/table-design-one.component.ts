import { Component, inject} from '@angular/core';
import { GrupoButtonsHeaderCargaDatosComponent } from '../../Buttons/grupo-buttons-header-carga-datos/grupo-buttons-header-carga-datos.component';
import { DetalleInventarioComponent } from '../../detalle-inventario/detalle-inventario.component';
import { InventariosUseCases } from '../../../../../../Domain/use-case/inventarios/get-inventarios-useCase';
import { Subscription } from 'rxjs';
import { inventariosModel } from '../../../../../../Domain/models/inventarios/inventarios.models';
import { InventariosByIdUseCases } from '../../../../../../Domain/use-case/inventarios/get-inventarioById-useCase';
import { detalleCarga } from '../../../../../../Domain/models/cargaDatos/cargaDatos.model';

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

  private listaInventarios = inject(InventariosUseCases);
  private ObjectInventario = inject(InventariosByIdUseCases);
  private inventarioSubscription: Subscription | undefined;

  datosInventarioslista: Array<inventariosModel> = [];
  datosInventario: inventariosModel = {} as inventariosModel;
  cantidadDatosInventarioLista: number = 0;
  cantidadListaProductos: number = 0;
  listaProductos: Array<detalleCarga> = [];

  // Variables para paginación
  paginatedProductos: Array<detalleCarga> = [];
  currentPageProductos: number = 1;
  itemsPerPageProductos: number = 5;
  totalPagesProductos: number = 0;

  ngOnInit(): void {
    this.listarInventarios();
  }

  listarInventarios() {
    this.inventarioSubscription = this.listaInventarios.getInventarios().subscribe((Response: inventariosModel[]) => {
      this.datosInventarioslista = Response;
      this.cantidadDatosInventarioLista = Response.length;
    });
  }

  ObtenerDetalleInventarios(rucempresa: string, idcarga: number) {
    this.ObjectInventario.getInventarioById(rucempresa, idcarga).subscribe((response: inventariosModel) => {
      this.datosInventario = response;
      this.listaProductos = response.detalle;
      this.cantidadListaProductos = response.detalle.length;

      this.totalPagesProductos = Math.ceil(this.cantidadListaProductos / this.itemsPerPageProductos);
      this.updatePaginatedProductos();
    });
  }

  updatePaginatedProductos() {
    const startIndex = (this.currentPageProductos - 1) * this.itemsPerPageProductos;
    const endIndex = startIndex + this.itemsPerPageProductos;
    this.paginatedProductos = this.listaProductos.slice(startIndex, endIndex);
  }

  handlePageChange(newPage: number) {
    this.currentPageProductos = newPage;
    this.updatePaginatedProductos();
  }

  ngOnDestroy(): void {
    if (this.inventarioSubscription) {
      this.inventarioSubscription.unsubscribe();
    }
  }

}
