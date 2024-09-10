import { Validators } from '../../../config';

export class CreateSolicitudDto {

  private constructor(
    public readonly codigo: string,
    public readonly description: string,
    public readonly resumen: string,
    public readonly user: string, // ID
    public readonly empleado: string, // ID
  ) { }

  static create( props: { [ key: string ]: any; } ): [ string?, CreateSolicitudDto?] {

    const {
      codigo,
      description,
      resumen,
      user,
      empleado,
    } = props;


    if ( !codigo ) return [ 'Missing name' ];
    if ( !description ) return [ 'Missing description' ];
    if ( !resumen ) return [ 'Missing resumen' ];

    if ( !user ) return [ 'Missing user' ];
    if ( !Validators.isMongoID(user) ) return ['Invalid User ID'];
    
    if ( !empleado ) return [ 'Missing empleado' ];
    if ( !Validators.isMongoID(empleado) ) return ['Invalid empleado ID'];
    

    return [
      undefined,
      new CreateSolicitudDto(
        codigo,
        description,
        resumen,
        user,
        empleado,
      )
    ];


  }


}