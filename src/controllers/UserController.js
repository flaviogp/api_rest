import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id nao enviado!'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario nao existe'],
        });
      }

      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ['Id nao enviado'] });
      }
      const oldUser = await User.findByPk(req.params.id);
      if (!oldUser) {
        return res.status(400).json({ errors: ['usuario nao existe'] });
      }
      const updatedUser = await oldUser.update(req.body);
      return res.json(updatedUser);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ['Id nao enviado'] });
      }
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({ errors: ['usuario nao existe'] });
      }
      await user.destroy();
      return res.json('Usuario apagado com sucesso!');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
