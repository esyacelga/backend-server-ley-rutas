import {Router} from 'express';
import {ActualizarTipoArticulo, ObtenerTodos, RegistrarTipoArticulo} from "./service/TipoArticuloService";

const tipoArticulo = Router();

/**
 * Obtiene todos
 */
tipoArticulo.put('/obtenerTodosTipoArticulo', ObtenerTodos);

/**
 * Crea un registro
 */
tipoArticulo.post('/', RegistrarTipoArticulo);


/**
 * Actualiza un registro
 */
tipoArticulo.put('/', ActualizarTipoArticulo);


export default tipoArticulo;
