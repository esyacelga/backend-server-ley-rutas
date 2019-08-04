var express = require('express');
var Usuario = require('../models/usuario');
var bcrypt = require('bcryptjs');

var app = express();
//Rutas
//OBTIENE TODOS LOS USUARIOS
app.get('/', (req, res, next) => {
    Usuario.find({}, 'nombre email img role').exec(
        (error, usuarios) => {
            if (error) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error cargando usuario',
                    errors: error
                })
            }
            res.status(200).json({
                ok: true,
                usuarios: usuarios
            })
        });


})


app.post('', (req, res) => {
    var body = req.body;
    var usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        img: body.img,
        role: body.role
    });

    usuario.save((err, usuarioGuardado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear usuario',
                errors: err
            })
        }
        res.status(201).json({
            ok: true,
            usuario: usuarioGuardado
        })
    });

});


module.exports = app;
