const router = require('express').Router();
const comentarioService = require('../service/comentarioService');
const comentarioRepository = require('../repository/comentarioRepository');
comentarioService.comentarioRepository = comentarioRepository;

router.get('/',
  async (req, res) => {
    try {
      const commentsCreated = await comentarioService.getComentarios();
      res.status(200).json(commentsCreated);
    } catch (error) {
      console.log("erro na criação");
      console.log(error);
    }
  });

router.get('/discussao/:id', async (req,res) => {
  try {
    const idDiscussao = req.params.id;
    const commentsCreated = await comentarioService.getComentariosByDiscussao(idDiscussao);
    res.status(200).json(commentsCreated);
  } catch (error) {
    console.log(error);
  }
});

router.post('/',
  async (req, res) => {
    try {
      let now = new Date();
      const comentario = {
        descricao_comentario: req.body.descricao,
        createdAt: now,
        updatedAt: now,
        data_comentario: now,
        usuarioIdUsuario: req.body.idUsuarioLogado,
        discussaoIdDiscussao: req.body.id_disc,
      };
      console.log(comentario)
      const comentarioCreated = await comentarioService.createComentario(comentario);
      res.status(200).json(comentarioCreated);
    } catch (error) {
      console.log(error);
    }
  });

  module.exports = router;