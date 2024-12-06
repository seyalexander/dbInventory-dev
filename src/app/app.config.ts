import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CargaDatosGateway } from './Domain/models/cargaDatos/gateway/cargaDatos-gateway';
import { CargaDatosService } from './Infraestructure/driven-adapter/carga_datos/carga-datos.service';
import { inventariosGateway } from './Domain/models/inventarios/gateway/inventarios-gateway';
import { InventariosService } from './Infraestructure/driven-adapter/inventarios/inventarios.service';
import { EmpresasGateway } from './Domain/models/empresas/gateway/empresas-gateway';
import { EmpresasService } from './Infraestructure/driven-adapter/empresas/empresas.service';

export const appConfig: ApplicationConfig = {
  providers: [

    provideRouter(routes),
    HttpClientModule,
    {provide: CargaDatosGateway, useClass: CargaDatosService},
    {provide: inventariosGateway, useClass: InventariosService},
    {provide: EmpresasGateway, useClass: EmpresasService},
    {provide: LocationStrategy, useClass: HashLocationStrategy },
    provideHttpClient(withInterceptorsFromDi())
  ]
};
