import { bcryptAdapter } from '../../config';



export const seedData = {

  users: [
    { name: 'Test 1', email: 'test1@google.com', password: bcryptAdapter.hash( '123456') },
    { name: 'Test 2', email: 'test2@google.com', password: bcryptAdapter.hash( '123456') },
    { name: 'Test 3', email: 'test3@google.com', password: bcryptAdapter.hash( '123456') },
    { name: 'Test 4', email: 'test4@google.com', password: bcryptAdapter.hash( '123456') },
    { name: 'Test 5', email: 'test5@google.com', password: bcryptAdapter.hash( '123456') },
    { name: 'Test 6', email: 'test6@google.com', password: bcryptAdapter.hash( '123456') },
  ],

  empleados: [
    { nombre: 'empleado1', code: 'emp001', fecha_ingreso: '09/09/2024', salario: 400.00, activo: true, },
    { nombre: 'empleado2', code: 'emp002', fecha_ingreso: '09/09/2024', salario: 400.00, activo: true, },
    { nombre: 'empleado3', code: 'emp003', fecha_ingreso: '09/09/2024', salario: 400.00, activo: true, },
    { nombre: 'empleado4', code: 'emp004', fecha_ingreso: '09/09/2024', salario: 400.00, activo: true, },
    { nombre: 'empleado5', code: 'emp005', fecha_ingreso: '09/09/2024', salario: 400.00, activo: true, },
    { nombre: 'empleado6', code: 'emp006', fecha_ingreso: '09/09/2024', salario: 400.00, activo: true, },
    { nombre: 'empleado7', code: 'emp007', fecha_ingreso: '09/09/2024', salario: 400.00, activo: true, },
    { nombre: 'empleado8', code: 'emp008', fecha_ingreso: '09/09/2024', salario: 400.00, activo: true, },
    { nombre: 'empleado9', code: 'emp009', fecha_ingreso: '09/09/2024', salario: 400.00, activo: true, },
    { nombre: 'empleado10', code: 'emp0010', fecha_ingreso: '09/09/2024', salario: 400.00, activo: true, },
    { nombre: 'empleado11', code: 'emp0011', fecha_ingreso: '09/09/2024', salario: 400.00, activo: true, },
  ],

  solicitudes: [
    { codigo: 'sol001', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol002', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol003', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol004', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol005', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol006', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol007', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol008', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol009', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol0010', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol0011', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol0012', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol0013', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol0014', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol0015', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol0016', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol0017', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol0018', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol0019', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    { codigo: 'sol0020', descripcion: 'mud month are account dozen', resumen: 'mud month are account dozen' },
    
  ]



}