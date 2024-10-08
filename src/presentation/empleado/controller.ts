import { Response, Request } from 'express';
import { CreateEmpleadoDto, CustomError, PaginationDto } from '../../domain';
import { EmpleadoService } from '../services/empleado.service';




export class EmpleadoController {

  // DI
  constructor(
    private readonly empleadoService: EmpleadoService,
  ) { }


  private handleError = ( error: unknown, res: Response ) => {
    if ( error instanceof CustomError ) {
      return res.status( error.statusCode ).json( { error: error.message } );
    }

    console.log( `${ error }` );
    return res.status( 500 ).json( { error: 'Internal server error' } );
  };


  createEmpleado = ( req: Request, res: Response ) => {

    const [ error, createEmpleadoDto ] = CreateEmpleadoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );


    this.empleadoService.createEmpleado( createEmpleadoDto!, req.body.user )
      .then( empleado => res.status( 201 ).json( empleado ) )
      .catch( error => this.handleError( error, res ) );


  };

  getEmpleado = async ( req: Request, res: Response ) => {

    const { page = 1, limit = 10 } = req.query;
    const [ error, paginationDto ] = PaginationDto.create( +page, +limit );
    if ( error ) return res.status(400).json({ error });
    
    this.empleadoService.getEmpleados( paginationDto! )
      .then( empleado => res.json( empleado ))
      .catch( error => this.handleError( error, res ) );

  };


}