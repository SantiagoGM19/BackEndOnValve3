const _mysql = require('../Services/mysql.service');
const mysql = require('mysql');

const iniciarUsuario = async (req, res) => {
    try {
        let user = req.body;
        //let correo = req.params.correo;
        //let contraseña = req.params.contraseña;
        let sql = `select correo, contraseña from usuarios where correo = "${user.correo}" and contraseña = "${user.contraseña}"`;
        let response_sql = _mysql.execute(sql)
        return res.send(response_sql);
    } catch (error) {
        console.error(error);
        return res.send(error);
    }
};

const crearUsuario = async (req, res) => {
    try {
        let documento_identidad = req.params.documento_identidad;
        let nombre = req.params.nombre;
        let apellidos = req.params.apellidos;
        let id_ciudad = req.params.id_ciudad;
        let correo = req.params.correo;
        let contraseña = req.params.contraseña;
        let sql = "insert into usuarios (documento_identidad, nombre, apellidos, id_ciudad, correo, contraseña)"+
        `values ('${documento_identidad}','${nombre}','${apellidos}',${id_ciudad},'${correo}','${contraseña}')`
        _mysql.execute(sql);
        return res.send({
            ok: true,
            message: "Usuario creado",
            info: user,
          });
    } catch (error) {
        console.error(error);
        return res.send(error);
    }
}


module.exports = {iniciarUsuario, crearUsuario}