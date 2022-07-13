import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Flavio',
      sobrenome: 'Gomes',
      email: 'flaviogomes@gmail.com',
      idade: 26,
      peso: 80,
      altura: 1.70,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
