import { SolicitudModel } from "../../data";
import { CreateSolicitudDto, CustomError, PaginationDto} from "../../domain";



export class SolicitudService {

  // DI
  constructor() { }


  async createSolicitud( createSolicitudDto: CreateSolicitudDto ) {

    const solicitudExists = await SolicitudModel.findOne( { codigo: createSolicitudDto.codigo } );
    if ( solicitudExists ) throw CustomError.badRequest( 'Solicitud already exists' );

    console.log("~ createSolicitudDto:", createSolicitudDto)
    try {

      const solicitud = new SolicitudModel( createSolicitudDto );

      await solicitud.save();

      return solicitud;

    } catch ( error ) {
      throw CustomError.internalServer( `${ error }` );
    }

  }



  async getSolicitudes( paginationDto: PaginationDto ) {

    const { page, limit } = paginationDto;


    try {

      const [ total, solicitudes ] = await Promise.all( [
        SolicitudModel.countDocuments(),
        SolicitudModel.find()
          .skip( ( page - 1 ) * limit )
          .limit( limit )
          .populate('user')
          .populate('empleado')
          // .populate('user', 'name email')
      ] );


      return {
        page: page,
        limit: limit,
        total: total,
        next: `/api/solicitudes?page=${ ( page + 1 ) }&limit=${ limit }`,
        prev: ( page - 1 > 0 ) ? `/api/solicitudes?page=${ ( page - 1 ) }&limit=${ limit }` : null,

        solicitudes: solicitudes,
      };


    } catch ( error ) {
      throw CustomError.internalServer( 'Internal Server Error' );
    }




  }




}


