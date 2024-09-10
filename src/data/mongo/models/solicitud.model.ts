import mongoose, { Schema } from 'mongoose';


const solicitudSchema = new mongoose.Schema( {

  codigo: {
    type: String,
    required: [ true, 'Code is required' ],
    unique: true,
  },
  description: {
    type: String,
    required: [ true, 'Description is required' ],
  },
  resumen: {
    type: String,
    required: [ true, 'Resumen is required' ],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  empleado: {
    type: Schema.Types.ObjectId,
    ref: 'Empleado',
    required: true
  }
  

} );


solicitudSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function( doc, ret, options ) {
    delete ret._id;
  },
})


export const SolicitudModel = mongoose.model('Solicitud', solicitudSchema);

