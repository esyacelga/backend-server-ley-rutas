import {Router} from 'express';
import {
    actualizarNotificacion,
    enviarNotificacion, enviarNotificacionMasiva, enviarNotificacionSimple,
    obtenerTodos,
    registrarNotificacion, registrarNotificacionSimple
} from "../../service/notificacion/PushNotificationService";

const notificacionRoute = Router();


/**
 * Crea un registro
 */
notificacionRoute.put('/', enviarNotificacion);
notificacionRoute.post('/', registrarNotificacion);
notificacionRoute.put('/obtenerTodos', obtenerTodos);
notificacionRoute.put('/actualizar', actualizarNotificacion);
notificacionRoute.put('/enviarNotificacionSimple', enviarNotificacionSimple);
notificacionRoute.put('/enviarNotificacionMasiva', enviarNotificacionMasiva);
notificacionRoute.post('/registrarNotificacionSimple', registrarNotificacionSimple);
export default notificacionRoute;

