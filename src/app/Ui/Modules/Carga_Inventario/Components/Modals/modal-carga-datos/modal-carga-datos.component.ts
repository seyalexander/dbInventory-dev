import { Component } from '@angular/core';
import { CargaDatosService } from '../../../../../../Infraestructure/driven-adapter/carga_datos/carga-datos.service';
import Swal from 'sweetalert2';
import { EmpresasService } from '../../../../../../Infraestructure/driven-adapter/empresas/empresas.service';
import { EmpresasModel } from '../../../../../../Domain/models/empresas/empresas.model';
import { Subscription } from 'rxjs';
import { PostCabecerareatedUseCases } from '../../../../../../Domain/use-case/inventarios/post-cabeceraRegistro-useCase';
import { inventariosModel } from '../../../../../../Domain/models/inventarios/inventarios.models';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InventariosService } from '../../../../../../Infraestructure/driven-adapter/inventarios/inventarios.service';

@Component({
  selector: 'modal-carga-datos',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './modal-carga-datos.component.html',
  styleUrl: './modal-carga-datos.component.css',
})
export class ModalCargaDatosComponent {

  selectedFile: File | null = null;
  mensajeCompleto: string = 'Error al cargar el archivo';
  ultimoIdCargaRegistrado: any

  private empresasSubscription: Subscription | undefined;
  DatosEmpresas: Array<EmpresasModel> = [];

  constructor(
    private cargaExcelsService: CargaDatosService,
    private _empresas: EmpresasService,
    private _postCabecera: InventariosService
  ) {}

  formularioRegistro: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.listaEmpresas()

    this.formularioRegistro = new FormGroup({
      rucempresa:  new FormControl('', [
        Validators.required,
      ]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  uploadFile(rucEmpresa: string, idCarga: number): void {
    if (this.selectedFile) {
      this.cargaExcelsService.uploadExcel(this.selectedFile, rucEmpresa, idCarga).subscribe({
        next: (response) => {
          this.mensajeCargaExcelCorrecta(response);
        },
        error: (err) => {
          this.mensajeCargaExcelError("Error al cargar el archivo", err)
          console.error(err);
          if (err.error) {
            this.mensajeCargaExcelError("Detalles del error", err.error)
            console.log( err.error)
          } else {
            this.mensajeCargaExcelError("Detalles del error desconocido", err)
          }
        },
      });
    }
  }

  mensajeCargaExcelCorrecta(mensaje: any): void {
    this.mensajeCompleto = mensaje.count + ' ' + mensaje.message;

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: this.mensajeCompleto,
      showConfirmButton: true,
      // timer: 1500
    }).then(() => {
      window.location.reload();
    });
  }

  mensajeCargaExcelError(mensaje: string, error: any): void {

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${mensaje} ${error}`,
      // footer: '<a href="#">Why do I have this issue?</a>'
    });
  }

  listaEmpresas() {
    this.empresasSubscription = this._empresas
    .ListarEmpresas()
    .subscribe((response: EmpresasModel[]) => {
      this.DatosEmpresas = response
    });
  }


  Cabecera: inventariosModel = new inventariosModel()
  guardarCabecera() {
    const formValue = this.Cabecera
    formValue.usuariocreacion = "Usuario_front"
    formValue.usuariomodificacion = "Usuario_front"
    formValue.dependecarga = 2
    formValue.totalregistros = 10
    formValue.estado = "1"
    const rucempresa = formValue.rucempresa
    this._postCabecera
    .newCabecera(formValue)
    .subscribe((response: any)=> {
      this._postCabecera.getUltimaCabceraRegistrada(rucempresa).subscribe((response: number)=> {
        this.uploadFile(rucempresa,response)
      })
    })
  }

  tituloSwalCorrecto: string = 'CONFIRMACIÓN';
  mensajeValidacionRegistroCorrecto(response: any) {
    const message = response && response.message ? response.message : 'Inventario creado correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      // window.location.reload();
    });
  }

  ngOnDestroy(): void {
    if (this.empresasSubscription) {
      this.empresasSubscription.unsubscribe();
    }
  }
}
