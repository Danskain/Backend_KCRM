import { EmpleadoModel } from '../../data';
import { CreateEmpleadoDto, CustomError, PaginationDto, UserEntity } from '../../domain';





export class EmpleadoService {

  // DI
  constructor() { }


  async createEmpleado( createEmpleadoDto: CreateEmpleadoDto, user: UserEntity ) {

    const empleadoExists = await EmpleadoModel.findOne( { code: createEmpleadoDto.code } );
    if ( empleadoExists ) throw CustomError.badRequest( 'Empleado already exists' );

    try {

      const empleado = new EmpleadoModel( {
        ...createEmpleadoDto,
        user: user.id,
      } );

      await empleado.save();


      return {
        id: empleado.id,
        nombre: empleado.nombre,
        fecha_ingreso: empleado.fecha_ingreso,
        salario: empleado.salario,
        activo: empleado.activo,
      }

    } catch ( error ) {
      throw CustomError.internalServer( `${ error }` );
    }

  }



  async getEmpleados( paginationDto: PaginationDto ) {

    const { page, limit } = paginationDto;


    try {

      // const total = await CategoryModel.countDocuments();
      // const categories = await CategoryModel.find()
      //   .skip( (page - 1) * limit )
      //   .limit( limit )
      const [ total, empleados ] = await Promise.all( [
        EmpleadoModel.countDocuments(),
        EmpleadoModel.find()
          .skip( ( page - 1 ) * limit )
          .limit( limit )
      ] );


      return {
        page: page,
        limit: limit,
        total: total,
        next: `/api/empleados?page=${ ( page + 1 ) }&limit=${ limit }`,
        prev: (page - 1 > 0) ? `/api/empleados?page=${ ( page - 1 ) }&limit=${ limit }`: null,

        empleados: empleados.map( empleado => ( {
          id: empleado.id,
          nombre: empleado.nombre,
          activo: empleado.activo,
          salario: empleado.salario,
          fecha_ingreso: empleado.fecha_ingreso,
          code: empleado.code,
        } ) )
      };


    } catch ( error ) {
      throw CustomError.internalServer( 'Internal Server Error' );
    }




  }




}


