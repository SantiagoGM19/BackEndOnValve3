const express = require('express');
const router = express.Router();
const usuarios_controller = require('../Controllers/usuarios.controller');
const valvulas_controller = require('../Controllers/valvulas.controller');

router.post("/usuarios/iniciarSesion", usuarios_controller.iniciarUsuario);
router.post("/usuarios/crearUsuario", usuarios_controller.crearUsuario);
router.post("/valvulas/agregarValvula", valvulas_controller.agregarValvula);

module.exports = router;