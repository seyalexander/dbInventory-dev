import { Routes } from '@angular/router';
import { CargaInventarioPageComponent } from './Ui/Modules/Carga_Inventario/Page/carga-inventario-page/carga-inventario-page.component';
import { DashboardPageComponent } from './Ui/Modules/Dashboard/Page/dashboard-page/dashboard-page.component';
import { MenuOpcionesComponent } from './Ui/Modules/Dashboard/Components/menu-opciones/menu-opciones.component';
import { LoginPageComponent } from './Ui/Modules/login/page/login-page/login-page.component';
import { EmpresaPageComponent } from './Ui/Modules/configuration/Empresas/page/empresa-page/empresa-page.component';
import { ConfigurationHomeComponent } from './Ui/Modules/configuration/Configuration_home/configuration-home/configuration-home.component';
import { UsuarioPageComponent } from './Ui/Modules/configuration/Usuarios/page/usuario-page/usuario-page.component';
import { ReportesPageComponent } from './Ui/Modules/reportes/page/reportes-page/reportes-page.component';
import { ReporteInventarioComponent } from './Ui/Modules/reportes/reports/reporte-inventario/reporte-inventario.component';

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
      },
      {
        path: 'configuracion',
        component: ConfigurationHomeComponent,
        children: [
          {
            path: '',
            component: EmpresaPageComponent,
          },
          {
            path: 'usuario',
            component:UsuarioPageComponent
          }
        ]
      },
      {
        path: 'reportes',
        pathMatch: 'full',
        component:ReportesPageComponent,
        children:[
          {
            path: '',
            component: ReporteInventarioComponent,
          },
        ]
      }
    ]
  }

];
