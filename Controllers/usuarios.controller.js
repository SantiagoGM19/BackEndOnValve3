const _mysql = require('../Services/mysql.service');
const mysql = require('mysql');

const iniciarUsuario = async (req, res) => {
    try {
        let usuario = req.body;
        //let sql = "select * from usuarios"
        let sql = `select correo, contraseña from usuarios where correo = '${usuario.correo}' and contraseña = '${usuario.contraseña}'`;
        let response = await _mysql.execute(sql);
        if(usuario.correo == undefined && usuario.contraseña == undefined){
            return res.send({
                ok: false,
                message: "mijo siga intentando, con toda!! ajuaa!", 
                info: usuario
            });
        }
        else{
            return res.send(response);
        }
    } catch (error) {
        console.error(error);
        return res.send(error);
    }
};

const crearUsuario = async (req, res) => {
    try {
        let usuario = req.body;
        let sql = "insert into usuarios (documento_identidad, nombre, apellidos, id_ciudad, correo, contraseña)"+
        `values ('${usuario.documento_identidad}','${usuario.nombre}','${usuario.apellidos}',${parseInt(usuario.id_ciudad)},'${usuario.correo}','${usuario.contraseña}')`
        _mysql.execute(sql);
        return res.send({
            ok: true,
            message: "Usuario creado",
            info: usuario
          });
    } catch (error) {
        console.error(error);
        return res.send(error);
    }
}


module.exports = {iniciarUsuario, crearUsuario}