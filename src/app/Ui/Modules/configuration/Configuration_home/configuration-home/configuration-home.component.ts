import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EmpresaPageComponent } from '../../Empresas/page/empresa-page/empresa-page.component';
import { IconsSvgCalendar, IconsSvgDocumentacion, IconsSvgHome, IconsSvgUsuario } from '../../../../Shared/Components/icons/svg/icons-svg/icons-svg.component';
import { OpcionesHeaderUsuarioComponent } from '../components/opciones-header-usuario/opciones-header-usuario.component';

@Component({
  selector: 'configuration-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    OpcionesHeaderUsuarioComponent,
    EmpresaPageComponent,
    IconsSvgDocumentacion,
    IconsSvgCalendar,
    IconsSvgUsuario,
    IconsSvgHome
  ],
  templateUrl: './configuration-home.component.html',
  styleUrl: './configuration-home.component.css'
})
export class ConfigurationHomeComponent {
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
        name: 'Empresas',
        icon: 'uil uil-estate',
        route: ['/','dashboard','configuracion'],
      },
      {
        name: 'Usuarios',
        icon: 'uil uil-estate',
        route: ['/','dashboard','configuracion', 'usuario'],
      }

    ]

  }

}
