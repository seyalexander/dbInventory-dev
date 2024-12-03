import { Component, inject, OnInit } from '@angular/core';
import { CargaDatosService } from '../../../../../../Infraestructure/driven-adapter/carga_datos/carga-datos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'grupo-buttons-header-carga-datos',
  standalone: true,
  imports: [],
  templateUrl: './grupo-buttons-header-carga-datos.component.html',
  styleUrl: './grupo-buttons-header-carga-datos.component.css'
})
export class GrupoButtonsHeaderCargaDatosComponent implements OnInit{

  private DescargarPlantillaExcel = inject(CargaDatosService);

  ngOnInit(): void {

  }

  BtndescargarPlantilla():void {
    this.DescargarPlantillaExcel.DowloadCargaDatos().subscribe({
      next: (response) => {
        const blob = response;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Plantilla_DbInventory.xlsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        this.mensajeDescargaCorrecta();
      },
      error: (err) => {
        console.error('Error al descargar archivo', err);
      }
    });
  }

  mensajeDescargaCorrecta(): void {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Archivo descargado exitosamente",
      showConfirmButton: false,
      timer: 1500
    });
  }
}
