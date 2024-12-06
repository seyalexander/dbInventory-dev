import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'menu-opciones',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-opciones.component.html',
  styleUrl: './menu-opciones.component.css'
})
export class MenuOpcionesComponent {
  mainMenu: {
    defaultOptions: Array<any>;
    accessLink: Array<any>;
  } = {
    defaultOptions: [],
    accessLink: [],
  };

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.mainMenu.defaultOptions = [
      {
        name: 'Cargar Inventario',
        icon: 'uil uil-estate',
        route: ['/','Cargar_inventario'],
      },
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Cargar Inventario',
        icon: 'uil uil-estate',
        route: ['/','dashboard','Cargar_inventario'],
      },
      {
        name: 'Administrar',
        icon: 'uil uil-estate',
        route: ['/','dashboard','Cargar_inventario'],
      },
      {
        name: 'Asignar',
        icon: 'uil uil-estate',
        route: ['/','dashboard','Cargar_inventario'],
      },
      {
        name: 'Consultar',
        icon: 'uil uil-estate',
        route: ['/','dashboard','Cargar_inventario'],
      },
      {
        name: 'Ajustes',
        icon: 'uil uil-estate',
        route: ['/','dashboard','configuracion'],
      },
    ]

  }

}
