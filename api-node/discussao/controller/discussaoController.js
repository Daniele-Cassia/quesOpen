const router = require('express').Router();
const discussaoService = require('../service/discussaoService');
const discussaoRepository = require('../repository/discussaoRepository');
discussaoService.discussaoRepository = discussaoRepository;

router.get('/',
  async (req, res) => {
    try {
      const discussaoCreated = await discussaoService.getAllDiscussoes();
      res.status(200).json(discussaoCreated);
    } catch (error) {
      console.log("erro na criação");
      console.log(error);
    }
  });

router.get('/discussoes-usuario/:id', async(req,res) => {
  try {
    const discussoesByUsuario = await discussaoService.getDiscussoesByUsuario(req.params.id);
    res.status(200).json(discussoesByUsuario);
  } catch (error) {
    console.log(error);
  }
});

router.get('/discussoes-disciplina/:id',async(req,res) => {
  try {
    const discussoesByDisciplina = await discussaoService.getDiscussoesByDisciplina(req.params.id);
    res.status(200).json(discussoesByDisciplina);
  } catch (error) {
    console.log(error);
  }
})

router.get('/discussaoporid/:id', async(req,res)=> {
  try {
    const discussaoById = await discussaoService.getDiscussaoById(req.params.id);
    res.status(200).json(discussaoById);
  } catch (error) {
    console.log(error);
  }
})

router.post('/',
  async (req, res) => {
    try {
      let now = new Date();
      const discussao = {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        createdAt: now,
        updatedAt: now,
        data_discussao: now,
        usuarioIdUsuario: req.user.id_usuario,
        disciplinaIdDisciplina: req.body.id_disc,
      };
      // console.log(discussao);
      const discussaoCreated = await discussaoService.createDiscussao(discussao);
      res.status(200).json(discussaoCreated);
    } catch (error) {
      console.log(error);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const discId = req.params.id;
      await discussaoService.deletarDiscussao(discId);
      res.status(204).end();
    } catch (error) {
      console.log(error);
    }
  });

  module.exports = router;