import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({ attributes: ['id', 'nome', 'sobrenome', 'idade', 'email'] });
    return res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      const { id, nome, sobrenome, idade, email } = aluno;
      return res.json({ id, nome, sobrenome, idade, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id nao enviado!'],
        });
      }

      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao existe'],
        });
      }

      const { id, nome, sobrenome, idade, email } = aluno;
      return res.json({ id, nome, sobrenome, idade, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id nao enviado!'],
        });
      }

      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao existe'],
        });
      }

      const updatedAluno = await aluno.update(req.body);
      const { id, nome, sobrenome, email } = updatedAluno;
      return res.json({ id, nome, sobrenome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id nao enviado!'],
        });
      }

      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao existe!'],
        });
      }
      const { nome } = aluno;
      await aluno.destroy();
      return res.json(`O Aluno ${nome} foi deletado com sucesso!`);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
