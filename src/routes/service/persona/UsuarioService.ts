import {Request, Response} from "express";
import {CommonsMethods} from "../../../commons/CommonsMethods";
import {UsuarioModel} from "../../../models/security/UsuarioModel";

const util = new CommonsMethods();

export const ObtenerTodos = (req: Request, res: Response) => {
    var body = req.body;
    UsuarioModel.find({}, (error, objeto) => {
        res = util.responceBuscar(req, res, error, objeto);
    });
};


export const obtenerUsuarioPorId = (req: Request, res: Response) => {
    var body = req.body;
    UsuarioModel.findById({}, (error, objeto) => {
        res = util.responceBuscar(req, res, error, objeto);
    }).where();
};

export const Registrar = (req: Request, res: Response) => {
    const data = {
        avatar: req.body.avatar,
        playerId: req.body.playerId,
        clave: req.body.clave,
        estado: req.body.estado
    };
    UsuarioModel.create(data, (err: any, objeto: any) => {
        res = util.responceCrear(req, res, err, objeto);
    });
}

export const Actualizar = (req: Request, res: Response) => {
    const data = {
        _id: req.body._id,
        avatar: req.body.avatar,
        playerId: req.body.playerId,
        estado: req.body.estado
    };
    UsuarioModel.findByIdAndUpdate(req.body._id, data, {new: true}, (err, userDB) => {
        res = util.responceGuardar(req, res, err, userDB);
    });
};


