import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        len: {
          args: [3, 50],
          msg: ['O campo nome deve ter no minimo 3 caracteres'],
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        len: {
          args: [3, 50],
          msg: ['O campo sobrenome deve ter no minimo 3 caracteres'],
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: true,
        validate: {
          isEmail: {
            msg: 'Email invalido!',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Insira uma idade valida, Idade precisa ser um numero inteiro',
          },
        },

      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um numero inteiro ou de ponto flutuante',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um numero inteiro ou de ponto flutuante',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
