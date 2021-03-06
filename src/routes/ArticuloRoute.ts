import {Router} from 'express';
import {
    Actualizar,
    ObtenerTodos,
    ObtnerArticuloImagenes,
    PaginarArticulos,
    Registrar,
    RegistrarArticulo
} from "./service/ArticuloService";
import {SubirImagen} from "./service/UploadGenericService";

const articuloRoute = Router();


articuloRoute.get('/imagen/:directorio/:img', ObtnerArticuloImagenes);

/**
 * Obtiene todos
 */
articuloRoute.put('/paginadoArticulo', PaginarArticulos);

/**
 * Obtiene todos
 */
articuloRoute.put('/obtenerTodos', ObtenerTodos);

/**
 * Crea un registro
 */
articuloRoute.post('/', Registrar);

/**
 * Crea un registro
 */
articuloRoute.post('/registrarArticulo', RegistrarArticulo);


/**
 * Crea un registro
 */
articuloRoute.put('/registrarArticulo', Actualizar);


/**
 * Actualiza un registro
 */
articuloRoute.put('/', Actualizar);

/**
 * Servicio de subida
 */
articuloRoute.post('/upload', SubirImagen);


export default articuloRoute;
