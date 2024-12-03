import { Routes } from '@angular/router';
import { CargaInventarioPageComponent } from './Ui/Modules/Carga_Inventario/Page/carga-inventario-page/carga-inventario-page.component';
import { DashboardPageComponent } from './Ui/Modules/Dashboard/Page/dashboard-page/dashboard-page.component';
import { MenuOpcionesComponent } from './Ui/Modules/Dashboard/Components/menu-opciones/menu-opciones.component';
import { LoginPageComponent } from './Ui/Modules/login/page/login-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component:DashboardPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component:MenuOpcionesComponent
      },
      {
        path: 'Cargar_inventario',
        pathMatch: 'full',
        component:CargaInventarioPageComponent
      }
    ]
  }

];
