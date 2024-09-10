import { Request, Response } from "express";
import { CreateSolicitudDto, CustomError, PaginationDto } from "../../domain";
import { SolicitudService } from "../services/solicitud.service";





export class SolicitudController {

  // DI
  constructor(
    private readonly solicitudService: SolicitudService,
  ) { }


  private handleError = ( error: unknown, res: Response ) => {
    if ( error instanceof CustomError ) {
      return res.status( error.statusCode ).json( { error: error.message } );
    }

    console.log( `${ error }` );
    return res.status( 500 ).json( { error: 'Internal server error' } );
  };


  createSolicitud = ( req: Request, res: Response ) => {

    const [ error, createSolicitudDto ] = CreateSolicitudDto.create({ 
      ...req.body,
      user: req.body.user.id,
    });
    if ( error ) return res.status( 400 ).json( { error } );


    this.solicitudService.createSolicitud( createSolicitudDto! )
      .then( solicitud => res.status( 201 ).json( solicitud ) )
      .catch( error => this.handleError( error, res ) );

  };

  getSolicitudes = async ( req: Request, res: Response ) => {

    const { page = 1, limit = 10 } = req.query;
    const [ error, paginationDto ] = PaginationDto.create( +page, +limit );
    if ( error ) return res.status(400).json({ error });

    
    this.solicitudService.getSolicitudes( paginationDto! )
      .then( solicitud => res.json( solicitud ))
      .catch( error => this.handleError( error, res ) );

  };


}