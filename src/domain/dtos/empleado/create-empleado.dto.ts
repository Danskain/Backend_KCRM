



export class CreateEmpleadoDto {

  private constructor(
    public readonly nombre: string,
    public readonly code: string,
    public readonly fecha_ingreso: string,
    public readonly salario: number,
    public readonly activo: boolean,
  ) {}


  static create( object: { [key: string]: any } ):[string?, CreateEmpleadoDto?] {

    const { code, nombre, fecha_ingreso, salario, activo = false } = object;
    let availableBoolean = activo;

    if ( !code ) return ['Missing name'];
    if ( !fecha_ingreso ) return ['Missing fecha_ingreso'];
    if ( !code ) return ['Missing code'];
    if ( !salario ) return ['Missing salario']; 
    if ( typeof activo !== 'boolean' ) {
      availableBoolean = ( activo === 'true' )
    }

    return [undefined, new CreateEmpleadoDto(nombre, code, fecha_ingreso, salario, availableBoolean)];

  }


}



