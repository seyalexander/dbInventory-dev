import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CargaDatosGateway } from './Domain/models/cargaDatos/gateway/cargaDatos-gateway';
import { CargaDatosService } from './Infraestructure/driven-adapter/carga_datos/carga-datos.service';

export const appConfig: ApplicationConfig = {
  providers: [

    provideRouter(routes),
    HttpClientModule,
    {provide: CargaDatosGateway, useClass: CargaDatosService},
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideHttpClient(withInterceptorsFromDi())
  ]
};
