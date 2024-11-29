import { Component } from '@angular/core';
import { HeaderPrincipalComponent } from '../../../../Shared/Components/header-principal/header-principal.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MenuOpcionesComponent } from '../../Components/menu-opciones/menu-opciones.component';

@Component({
  selector: 'dashboard-page',
  standalone: true,
  imports: [
    HeaderPrincipalComponent,
    RouterOutlet,
    MenuOpcionesComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {


}
