var mdlArticulo = require('../models/Articulo');
var responceBuscar = require('../system/SystemUtils');
var responceActualizar = require('../system/SystemUtils');
var responceGuardar = require('../system/SystemUtils');
var responceCrear = require('../system/SystemUtils');
var responceEliminar = require('../system/SystemUtils');

function obtenerTodos(req, res) {
    var body = req.body;
    mdlArticulo.find({}, (error, objeto) => {
        res = responceBuscar.responceBuscar(req, res, error, objeto);
    }).where('estado').equals(1);
}


function registrar(req, res) {
    var body = req.body;
    var svc = new mdlArticulo({
        tipoArticulo: body.tipoArticulo,
        descripcion: body.descripcion,
        estado: body.estado
    });
    svc.save((err, objeto) => {
        res = responceCrear.responceCrear(req, res, err, objeto);
    });

}

function actualizar(req, res) {
    var body = req.body;
    var id = body._id;
    mdlArticulo.findById(id, (err, obj) => {
        var ret = responceActualizar.responceActualizar(req, res, err, obj);
        if (ret) {
            return ret;
        }
        obj.tipoArticulo=body.tipoArticulo,
        obj.descripcion = body.descripcion;
        obj.estado = body.estado;
        obj.save((err, objGuardado) => {
            res = responceGuardar.responceGuardar(req, res, err, objGuardado);
        });
    });
}

function eliminar(req, res) {
    var id = req.params.id;
    mdlArticulo.findOneAndDelete(id, (err, objeto) => {
        res = responceEliminar.responceEliminar(req, res, err, objeto);
    });
}


module.exports = {
    obtenerTodos,
    registrar,
    actualizar,
    eliminar
};