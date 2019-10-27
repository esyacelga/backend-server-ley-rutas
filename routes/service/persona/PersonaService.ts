import {Request, Response} from "express";
import {CommonsMethods} from "../../../commons/CommonsMethods";
import {PersonaModeloPersistencia} from "../../../models/persona/PersonaModel";

const util = new CommonsMethods();

export const ObtenerTodos = (req: Request, res: Response) => {
    PersonaModeloPersistencia.find({}, (error, objeto) => {
        res = util.responceBuscar(req, res, error, objeto);
    });
}

export const ObtenerPersonaPorId = (req: Request, res: Response) => {
    PersonaModeloPersistencia.findOne({}, (error, objeto) => {
        res = util.responceBuscar(req, res, error, objeto);
    }).where('_id').equals(req.body.idPersona);
}



export const Registrar = (req: Request, res: Response) => {
    const data = {
        primerNombre: req.body.primerNombre,
        segundoNombre: req.body.segundoNombre,
        primerApellido: req.body.primerApellido,
        segundoApellido: req.body.segundoApellido,
        identificacion: req.body.identificacion,
        sector: req.body.sector,
        fechaNacimiento: req.body.fechaNacimiento,
        descripcion: req.body.descripcion
    };
    PersonaModeloPersistencia.create(data, (err: any, objeto: any) => {
        res = util.responceCrear(req, res, err, objeto);
    });
}

export const Actualizar = (req: Request, res: Response) => {
    const data = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        identificacion: req.body.identificacion,
        correo: req.body.correo,
        sector: req.body.sector,
        fechaNacimiento: req.body.fechaNacimiento
    };
    PersonaModeloPersistencia.findByIdAndUpdate(req.body._id, data, {new: true}, (err, userDB) => {
        res = util.responceGuardar(req, res, err, userDB);
    });
};

