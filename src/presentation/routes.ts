import { Router } from 'express';

import { Authroutes } from './auth/routes';
import { EmpleadoRoutes } from './empleado/routes';
import { SolicitudRoutes } from './solicitudes/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use('/api/auth', Authroutes.routes );
    router.use('/api/empleados', EmpleadoRoutes.routes );
    router.use('/api/solicitudes', SolicitudRoutes.routes );



    return router;
  }


}

