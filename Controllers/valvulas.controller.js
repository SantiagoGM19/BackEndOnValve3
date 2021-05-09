const _mysql = require('../Services/mysql.service');

const agregarValvula = async(req, res) => {
    try {
        let valvula = req.body;
        let sql = "insert into valvulas (id_sensor, nombre, fabricante, identificacion_serial, estado, id_almacen)"+
        `values (${valvula.id_sensor},${valvula.nombre},${valvula.fabricante},${valvula.identificacion_serial},${valvula.estado},${valvula.id_almacen});`
        _mysql.execute(sql);
        return res.send({
            ok: true,
            message: "Valvula agregada",
            info: valvula
        });
    } catch (error) {
        console.error(error);
        return res.send(error);
    }
}

module.exports = {agregarValvula};