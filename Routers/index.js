const express = require('express');
const router = express.Router();
const usuarios_controller = require('../Controllers/usuarios.controller');

router.get("/usuarios/iniciarSesion", usuarios_controller.iniciarUsuario);
router.get("/usuarios/crearUsuario", usuarios_controller.crearUsuario);

module.exports = router;