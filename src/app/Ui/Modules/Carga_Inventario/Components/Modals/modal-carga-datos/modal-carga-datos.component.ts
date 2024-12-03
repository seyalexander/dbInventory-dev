import { Component } from '@angular/core';
import { CargaDatosService } from '../../../../../../Infraestructure/driven-adapter/carga_datos/carga-datos.service';
import Swal from 'sweetalert2';
import { count } from 'rxjs';

@Component({
  selector: 'modal-carga-datos',
  standalone: true,
  imports: [],
  templateUrl: './modal-carga-datos.component.html',
  styleUrl: './modal-carga-datos.component.css'
})
export class ModalCargaDatosComponent {
  selectedFile: File | null = null;

  constructor(private cargaExcelsService: CargaDatosService) {}



  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  uploadFile(): void {
    if (this.selectedFile) {
      this.cargaExcelsService.uploadExcel(this.selectedFile).subscribe({
        next: (response) => {
          this.mensajeCargaExcelCorrecta(response);
          console.log('Archivo cargado exitosamente', response.count);
        },
        error: (err) => {
          console.error('Error al cargar el archivo', err);
          // Para depurar más detalles del error
          if (err.error) {
            console.error('Detalles del error:', err.error);
          } else {
            console.error('Detalles del error desconocido:', err);
          }
        },
      });
    }
  }


  mensajeCompleto: String  = '';

  mensajeCargaExcelCorrecta(mensaje: any): void {

    this.mensajeCompleto = mensaje.count + ' ' + mensaje.message;

    Swal.fire({
      position: "center",
      icon: "success",
      title: this.mensajeCompleto,
      showConfirmButton: true,
      // timer: 1500
    }).then(()=>{
      window.location.reload();
    })
  }

}
