import mongoose, { Schema } from 'mongoose';


const empleadoSchema = new mongoose.Schema( {

  nombre: {
    type: String,
    required: [ true, 'Name is required' ]
  },
  code: {
    type: String,
    required: [ true, 'Code is required' ],
    unique: true,
  },
  fecha_ingreso: {
    type: String,
    required: [ true, 'Date is required' ],
  },
  salario: {
    type: Number,
    default: 0
  },
  activo: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
  

} );


empleadoSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function( doc, ret, options ) {
    delete ret._id;
  },
})



export const EmpleadoModel = mongoose.model('Empleado', empleadoSchema);

