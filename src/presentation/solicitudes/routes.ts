import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { SolicitudController } from './controller';
import { SolicitudService } from '../services/solicitud.service';





export class SolicitudRoutes {


  static get routes(): Router {

    const router = Router();
    const solicitudService = new SolicitudService()
    const controller = new SolicitudController(solicitudService)
    
    // Definir las rutas
    router.get('/', controller.getSolicitudes);
    router.post('/', [ AuthMiddleware.validateJWT ], controller.createSolicitud);




    return router;
  }


}

