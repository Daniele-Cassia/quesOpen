const router = require('express').Router();
const usuarioService = require('../service/usuarioService');

router.post('/',
  async (req, res) => {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        data_nasc: req.body.data_nasc,
        senha: req.body.senha,
      };
      const userCreated = await usuarioService.createUser(user);
      res.status(200).json(userCreated);
    } catch (error) {
      console.log("erro na criação");
      console.log(error);
    }
  });

  router.get('/',
  async (req, res) => {
    try {
      const usuariosCreated = await usuarioService.getAllUsuarios();
      res.status(200).json(usuariosCreated);
    } catch (error) {
      console.log("erro na criação");
      console.log(error);
    }
  });

  router.get('/usuario/:id', async(req,res) => {
    try {
      const userId = req.params.id;
      const userWanted = await usuarioService.getUsuariobyId(userId);
      res.status(200).json(userWanted);
    } catch (error) {
      console.log(error);
    }
  });

  module.exports = router;