"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        len: {
          args: [3, 50],
          msg: ['O campo nome deve ter no minimo 3 caracteres'],
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        len: {
          args: [3, 50],
          msg: ['O campo sobrenome deve ter no minimo 3 caracteres'],
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: true,
        validate: {
          isEmail: {
            msg: 'Email invalido!',
          },
        },
      },
      idade: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Insira uma idade valida, Idade precisa ser um numero inteiro',
          },
        },

      },
      peso: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um numero inteiro ou de ponto flutuante',
          },
        },
      },
      altura: {
        type: _sequelize2.default.FLOAT,
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

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
