import {model, Schema,} from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const tipoUsuarioPersona = new Schema({
    persona: {type: Schema.Types.ObjectId, ref: 'Persona'},
    usuario: {type: Schema.Types.ObjectId, ref: 'Usuario'},
    estado: {type: Number, required: [true, 'El estado es necesario'], default: 1}
});
tipoUsuarioPersona.plugin(uniqueValidator, {message: '{PATH} debe de ser único'});

export const TipoUsuarioPersona = model('TipoUsuario', tipoUsuarioPersona);
